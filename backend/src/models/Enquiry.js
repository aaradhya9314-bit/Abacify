import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    parentName: {
      type: String,
      required: [true, "Parent/guardian name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: 7,
      maxlength: 20,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
      validate: {
        validator: (value) => value === "" || /^\S+@\S+\.\S+$/.test(value),
        message: "Please provide a valid email",
      },
    },
    studentName: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },
    studentAgeOrClass: {
      type: String,
      required: [true, "Student age or class is required"],
      trim: true,
      maxlength: 40,
    },
    program: {
      type: String,
      required: [true, "Program is required"],
      enum: {
        values: ["abacus", "chess", "ai-robotics", "maths-science"],
        message: "Program must be one of abacus, chess, ai-robotics, maths-science",
      },
    },
    learningMode: {
      type: String,
      required: [true, "Learning mode is required"],
      enum: {
        values: ["online", "offline"],
        message: "Learning mode must be online or offline",
      },
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

export default mongoose.model("Enquiry", enquirySchema);
