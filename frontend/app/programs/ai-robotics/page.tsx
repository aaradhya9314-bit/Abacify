import type { Metadata } from "next";
import { ProgramHeader } from "@/components/programs/program-header";
import { ProgramThemes } from "@/components/programs/program-themes";
import { ProgramCtaBanner } from "@/components/programs/program-cta-banner";
import { MotifBand } from "@/components/programs/motif-band";
import { PROGRAMS } from "@/lib/programs";

const program = PROGRAMS["ai-robotics"];

export const metadata: Metadata = {
  title: "AI & Robotics Program | Abacify",
  description:
    "Abacify's AI & Robotics program introduces learners aged 7-17 to AI fundamentals, robotics, and computational thinking through project-based learning. Online and offline formats available.",
  alternates: { canonical: "/programs/ai-robotics" },
};

export default function AiRoboticsProgramPage() {
  return (
    <main className="bg-radial-grid">
      <div className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8">
        <MotifBand motif={program.visualMotif} />
        <div className="relative">
          <ProgramHeader program={program} />
        </div>
      </div>
      <ProgramThemes program={program} />
      <div className="mx-auto max-w-3xl px-5 pb-16 text-center text-sm text-slate-400 lg:px-8">
        This program focuses on building understanding and creative confidence with technology. It does not
        promise or guarantee any specific career outcome, job placement, or certification.
      </div>
      <ProgramCtaBanner program={program} />
    </main>
  );
}
