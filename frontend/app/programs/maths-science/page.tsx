import type { Metadata } from "next";
import { ProgramHeader } from "@/components/programs/program-header";
import { ProgramThemes } from "@/components/programs/program-themes";
import { ProgramCtaBanner } from "@/components/programs/program-cta-banner";
import { MotifBand } from "@/components/programs/motif-band";
import { PROGRAMS } from "@/lib/programs";

const program = PROGRAMS["maths-science"];

export const metadata: Metadata = {
  title: "Maths & Science Program | Abacify",
  description:
    "Structured academic support in Mathematics and Science for Classes 5-8, aligned with your child's school curriculum. Online and offline formats available.",
  alternates: { canonical: "/programs/maths-science" },
};

export default function MathsScienceProgramPage() {
  return (
    <main className="bg-radial-grid">
      <div className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8">
        <MotifBand motif={program.visualMotif} />
        <div className="relative">
          <ProgramHeader program={program} />
        </div>
      </div>
      <ProgramThemes program={program} />
      <ProgramCtaBanner program={program} />
    </main>
  );
}
