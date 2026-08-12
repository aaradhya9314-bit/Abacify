import type { ProgramLevel } from "@/lib/programs";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function AbacusLevels({ levels }: { levels: ProgramLevel[] }) {
  return (
    <section className="bg-ink px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Progressive Structure"
            title="8 Levels"
            description="Learning progresses through 8 structured levels, each building on the skills developed before it."
          />
        </Reveal>
        <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((level, index) => (
            <Reveal key={level.label} delay={index * 0.05}>
              <div className="glass relative h-full rounded-xl border border-program-abacus/25 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-program-abacus/35 bg-program-abacus/10 text-sm font-bold text-program-abacus">
                  {index + 1}
                </span>
                <p className="mt-4 font-heading text-base font-semibold text-white">{level.label}</p>
                <p className="mt-1 text-sm text-slate-400">{level.theme}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
