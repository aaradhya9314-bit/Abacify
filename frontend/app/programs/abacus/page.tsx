import type { Metadata } from "next";
import { ProgramHeader } from "@/components/programs/program-header";
import { ProgramThemes } from "@/components/programs/program-themes";
import { AbacusLevels } from "@/components/programs/abacus-levels";
import { ProgramCtaBanner } from "@/components/programs/program-cta-banner";
import { MotifBand } from "@/components/programs/motif-band";
import { PROGRAMS } from "@/lib/programs";

const program = PROGRAMS.abacus;

export const metadata: Metadata = {
  title: "Abacus Program | Abacify",
  description:
    "A structured, 8-level Abacus program for ages 5-15 focused on mental calculation, number sense, and concentration. Online and offline formats available.",
  alternates: { canonical: "/programs/abacus" },
};

export default function AbacusProgramPage() {
  return (
    <main className="bg-radial-grid">
      <div className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8">
        <MotifBand motif={program.visualMotif} />
        <div className="relative">
          <ProgramHeader program={program} />
        </div>
      </div>
      {program.levels ? <AbacusLevels levels={program.levels} /> : null}
      <ProgramThemes program={program} />
      <ProgramCtaBanner program={program} />
    </main>
  );
}
