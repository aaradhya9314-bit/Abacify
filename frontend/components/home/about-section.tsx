import { Layers, MessageSquare, Milestone, Target, Timer, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    title: "Structured Learning",
    icon: Layers,
    copy: "Every program follows a clear, step-by-step structure, rather than loosely organized sessions.",
  },
  {
    title: "Practical Understanding",
    icon: Target,
    copy: "We focus on genuine understanding and consistent practice, not shortcuts or one-off tricks.",
  },
  {
    title: "Focused Sessions",
    icon: Timer,
    copy: "Sessions are designed around a single program at a time, so learners can build depth in one area.",
  },
  {
    title: "Online + Offline Flexibility",
    icon: Workflow,
    copy: "Every program is available both online and offline, so families can choose what fits their routine.",
  },
  {
    title: "Age-Appropriate Progression",
    icon: Milestone,
    copy: "Programs are structured to match the learner's stage, rather than a single one-size-fits-all format.",
  },
  {
    title: "Parent-Focused Communication",
    icon: MessageSquare,
    copy: "We keep the enquiry and communication process direct and simple, so parents always know what to expect next.",
  },
];

export function AboutSection() {
  return (
    <section id="why-abacify" className="relative overflow-hidden bg-ink px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-mesh-line bg-[length:56px_56px] opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our Approach"
            title="Why Abacify"
            description="A considered approach to how programs are structured and delivered — built for parents who want clarity, not noise."
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-neon-cyan/35 hover:shadow-glow">
                  <Icon className="h-7 w-7 text-neon-cyan" />
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.copy}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
