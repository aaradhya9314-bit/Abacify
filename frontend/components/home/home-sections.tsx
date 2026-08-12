import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProgramCard } from "@/components/programs/program-card";
import { AboutSection } from "@/components/home/about-section";
import { LearningModesSection } from "@/components/home/learning-modes-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { PROGRAM_LIST } from "@/lib/programs";

export function HomeSections() {
  return (
    <>
      <section id="programs" className="scroll-mt-24 bg-ink px-5 py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Four Programs. One Structured Approach."
            title="Our Programs"
            description="Each program is built around its own structure and skill set, with a distinct approach designed for what it teaches."
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_LIST.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.06}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </section>

      <AboutSection />
      <LearningModesSection />
      <FinalCtaSection />
    </>
  );
}
