import { Home, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function LearningModesSection() {
  return (
    <section className="bg-midnight px-5 py-24 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Choose What Fits"
          title="Learning Modes"
          description="Every Abacify program is available online and offline. You can choose the format that works best for your family."
        />
      </Reveal>
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
        <Reveal>
          <Card className="glow-border h-full p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-cyan/30 bg-neon-cyan/10">
              <Home className="h-6 w-6 text-neon-cyan" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-white">Online</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Flexible, structured learning from home, following the same level-based approach as our offline
              sessions.
            </p>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="h-full p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/[0.05]">
              <MapPin className="h-6 w-6 text-slate-200" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-white">Offline</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Instructor-led, in-person learning. Location and scheduling details are shared directly once you
              enquire.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
