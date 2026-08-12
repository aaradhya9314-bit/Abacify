import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { isProgramSlug, PROGRAMS } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Enquire | Abacify",
  description: "Send an enquiry about Abacify's Abacus, Chess, AI & Robotics, or Maths & Science programs.",
  alternates: { canonical: "/enquire" },
};

interface EnquirePageProps {
  searchParams: Promise<{ program?: string }>;
}

export default async function EnquirePage({ searchParams }: EnquirePageProps) {
  const { program: programParam } = await searchParams;
  const defaultProgram = isProgramSlug(programParam) ? programParam : undefined;
  const program = defaultProgram ? PROGRAMS[defaultProgram] : undefined;

  return (
    <main className="bg-radial-grid px-5 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">Enquire</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">
            {program ? `Enquire About ${program.name}` : "Send an Enquiry"}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Share a few details and we&apos;ll get back to you. Submitting this form also opens WhatsApp with your
            details ready to send.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <Card className="glow-border mx-auto mt-12 max-w-3xl p-6 md:p-8">
          <EnquiryForm defaultProgram={defaultProgram} />
        </Card>
      </Reveal>
    </main>
  );
}
