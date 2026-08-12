import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ProgramCard } from "@/components/programs/program-card";
import { PROGRAM_LIST } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs | Abacify",
  description:
    "Explore Abacify's four structured learning programs: Abacus, Chess, AI & Robotics, and Maths & Science. Online and offline formats available.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <main className="bg-radial-grid px-5 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">Our Programs</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">
            Four Programs. One Structured Approach.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Each program is built around its own structure and skill set — choose the one that fits your child,
            or reach out and we can help.
          </p>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAM_LIST.map((program, index) => (
          <Reveal key={program.slug} delay={index * 0.06}>
            <ProgramCard program={program} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
