const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918239086451";

export function getWhatsAppNumber() {
  return whatsappNumber;
}

export function getDisplayPhoneNumber() {
  if (whatsappNumber.startsWith("91") && whatsappNumber.length === 12) {
    const local = whatsappNumber.slice(2);
    return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
  }
  return `+${whatsappNumber}`;
}

export function getWhatsAppLink() {
  return `https://wa.me/${whatsappNumber}`;
}

export function openWhatsAppMessage(message: string) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export interface EnquiryWhatsAppData {
  parentName: string;
  phone: string;
  email: string;
  studentName: string;
  studentAgeOrClass: string;
  programLabel: string;
  learningModeLabel: string;
  message: string;
}

export function enquiryWhatsAppMessage(data: EnquiryWhatsAppData) {
  return [
    "New Abacify Enquiry",
    "",
    `Parent/Guardian: ${data.parentName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || "Not provided"}`,
    `Student Name: ${data.studentName || "Not provided"}`,
    `Student Age / Class: ${data.studentAgeOrClass}`,
    `Program: ${data.programLabel}`,
    `Learning Mode: ${data.learningModeLabel}`,
    "",
    "Message / Requirements:",
    data.message,
  ].join("\n");
}
