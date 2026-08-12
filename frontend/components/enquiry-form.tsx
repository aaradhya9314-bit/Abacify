"use client";

import { FormEvent, useState } from "react";
import type React from "react";
import { Send } from "lucide-react";
import { FormStatus } from "@/components/form-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getApiBaseUrl, cn } from "@/lib/utils";
import { PROGRAM_LIST, type ProgramSlug, type LearningMode } from "@/lib/programs";
import { enquiryWhatsAppMessage, openWhatsAppMessage } from "@/lib/whatsapp";

type Status = { type: "success" | "error"; message: string } | null;

const LEARNING_MODES: { value: LearningMode; label: string }[] = [
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
];

interface FormValues {
  parentName: string;
  phone: string;
  email: string;
  studentName: string;
  studentAgeOrClass: string;
  program: ProgramSlug | "";
  learningMode: LearningMode | "";
  message: string;
}

const EMPTY_VALUES: FormValues = {
  parentName: "",
  phone: "",
  email: "",
  studentName: "",
  studentAgeOrClass: "",
  program: "",
  learningMode: "",
  message: "",
};

const PHONE_PATTERN = /^[+\d][\d\s-]{6,19}$/;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

interface EnquiryFormProps {
  defaultProgram?: ProgramSlug;
}

export function EnquiryForm({ defaultProgram }: EnquiryFormProps) {
  const [values, setValues] = useState<FormValues>({ ...EMPTY_VALUES, program: defaultProgram ?? "" });
  const [honeypot, setHoneypot] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  function setValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(current: FormValues): Record<string, string> {
    const errors: Record<string, string> = {};

    if (current.parentName.trim().length < 2) {
      errors.parentName = "Please enter the parent/guardian's name.";
    }
    if (!PHONE_PATTERN.test(current.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }
    if (current.email.trim() && !EMAIL_PATTERN.test(current.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!current.studentAgeOrClass.trim()) {
      errors.studentAgeOrClass = "Please enter the student's age or class.";
    }
    if (!current.program) {
      errors.program = "Please select a program.";
    }
    if (!current.learningMode) {
      errors.learningMode = "Please select a learning mode.";
    }
    if (current.message.trim().length < 10) {
      errors.message = "Please share a few details about your requirements (at least 10 characters).";
    }

    return errors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (honeypot) {
      setStatus({ type: "success", message: "Enquiry submitted successfully." });
      return;
    }

    const errors = validate(values);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setLoading(true);
    setStatus(null);

    const program = PROGRAM_LIST.find((item) => item.slug === values.program);
    const modeLabel = LEARNING_MODES.find((item) => item.value === values.learningMode)?.label ?? "";

    const payload = {
      parentName: values.parentName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      studentName: values.studentName.trim(),
      studentAgeOrClass: values.studentAgeOrClass.trim(),
      program: values.program,
      learningMode: values.learningMode,
      message: values.message.trim(),
    };

    try {
      const response = await fetch(`${getApiBaseUrl()}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit enquiry.");

      openWhatsAppMessage(
        enquiryWhatsAppMessage({
          ...payload,
          programLabel: program?.name ?? values.program,
          learningModeLabel: modeLabel,
        }),
      );

      setValues({ ...EMPTY_VALUES });
      setFieldErrors({});
      setStatus({
        type: "success",
        message: "Enquiry saved. WhatsApp has opened with your details ready to send.",
      });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {status ? <FormStatus {...status} /> : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Parent/Guardian Name"
          name="parentName"
          value={values.parentName}
          onChange={(value) => setValue("parentName", value)}
          error={fieldErrors.parentName}
          placeholder="Your name"
          required
        />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(value) => setValue("phone", value)}
          error={fieldErrors.phone}
          placeholder="+91 98765 43210"
          required
        />
        <FormField
          label="Email Address (optional)"
          name="email"
          type="email"
          value={values.email}
          onChange={(value) => setValue("email", value)}
          error={fieldErrors.email}
          placeholder="you@example.com"
        />
        <FormField
          label="Student Name (optional)"
          name="studentName"
          value={values.studentName}
          onChange={(value) => setValue("studentName", value)}
          error={fieldErrors.studentName}
          placeholder="Student's name"
        />
        <FormField
          label="Student Age / Class"
          name="studentAgeOrClass"
          value={values.studentAgeOrClass}
          onChange={(value) => setValue("studentAgeOrClass", value)}
          error={fieldErrors.studentAgeOrClass}
          placeholder="e.g. Age 9, or Class 6"
          required
        />

        <div className="grid gap-2">
          <Label htmlFor="program">
            Program <span className="text-neon-cyan">*</span>
          </Label>
          <Select value={values.program} onValueChange={(value) => setValue("program", value as ProgramSlug)}>
            <SelectTrigger
              id="program"
              aria-invalid={!!fieldErrors.program}
              aria-describedby={fieldErrors.program ? "program-error" : undefined}
            >
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              {PROGRAM_LIST.map((program) => (
                <SelectItem key={program.slug} value={program.slug}>
                  {program.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldErrors.program ? (
            <p id="program-error" role="alert" className="text-sm text-rose-300">
              {fieldErrors.program}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="learningMode">
            Learning Mode <span className="text-neon-cyan">*</span>
          </Label>
          <Select
            value={values.learningMode}
            onValueChange={(value) => setValue("learningMode", value as LearningMode)}
          >
            <SelectTrigger
              id="learningMode"
              aria-invalid={!!fieldErrors.learningMode}
              aria-describedby={fieldErrors.learningMode ? "learningMode-error" : undefined}
            >
              <SelectValue placeholder="Online or Offline" />
            </SelectTrigger>
            <SelectContent>
              {LEARNING_MODES.map((mode) => (
                <SelectItem key={mode.value} value={mode.value}>
                  {mode.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldErrors.learningMode ? (
            <p id="learningMode-error" role="alert" className="text-sm text-rose-300">
              {fieldErrors.learningMode}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message / Requirements</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your child's needs, preferred timings, or any questions you have."
          value={values.message}
          onChange={(event) => setValue("message", event.target.value)}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message ? (
          <p id="message-error" role="alert" className="text-sm text-rose-300">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Enquiry"} <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  className,
  ...props
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "name">) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={name}>
        {label} {required ? <span className="text-neon-cyan">*</span> : null}
      </Label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${name}-error`} role="alert" className="text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
