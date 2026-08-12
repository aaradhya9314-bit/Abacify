import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

const allowedOrigins = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Abacify backend API is running",
    routes: {
      health: "/health",
      api: "/api",
      enquiry: "/api/enquiry",
    },
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({ success: true, message: "API healthy" });
});

app.get("/api", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Abacify API routes",
    routes: ["/api/enquiry"],
  });
});

app.use("/api/enquiry", enquiryRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
