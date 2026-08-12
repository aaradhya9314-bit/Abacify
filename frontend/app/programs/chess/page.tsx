import type { Metadata } from "next";
import { ProgramHeader } from "@/components/programs/program-header";
import { ProgramThemes } from "@/components/programs/program-themes";
import { ProgramCtaBanner } from "@/components/programs/program-cta-banner";
import { MotifBand } from "@/components/programs/motif-band";
import { PROGRAMS } from "@/lib/programs";

const program = PROGRAMS.chess;

export const metadata: Metadata = {
  title: "Chess Program | Abacify",
  description:
    "Abacify's Chess program builds strategic thinking, planning, and decision-making through the game of chess. Online and offline formats available.",
  alternates: { canonical: "/programs/chess" },
};

export default function ChessProgramPage() {
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
