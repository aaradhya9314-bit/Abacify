import Enquiry from "../models/Enquiry.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const createEnquiry = asyncHandler(async (req, res) => {
  if (req.body.website) {
    res.status(400).json({ success: false, message: "Invalid submission" });
    return;
  }

  const enquiry = await Enquiry.create({
    parentName: req.body.parentName,
    phone: req.body.phone,
    email: req.body.email,
    studentName: req.body.studentName,
    studentAgeOrClass: req.body.studentAgeOrClass,
    program: req.body.program,
    learningMode: req.body.learningMode,
    message: req.body.message,
  });

  res.status(201).json({
    success: true,
    message: "Enquiry submitted successfully",
    data: { id: enquiry._id, createdAt: enquiry.createdAt },
  });
});
