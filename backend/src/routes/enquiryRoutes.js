import express from "express";
import rateLimit from "express-rate-limit";
import { createEnquiry } from "../controllers/enquiryController.js";
import { validateRequired } from "../middleware/validate.js";

const router = express.Router();

const enquiryLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many enquiries submitted. Please try again in a minute." },
});

router.post(
  "/",
  enquiryLimiter,
  validateRequired(["parentName", "phone", "studentAgeOrClass", "program", "learningMode", "message"]),
  createEnquiry,
);

export default router;
