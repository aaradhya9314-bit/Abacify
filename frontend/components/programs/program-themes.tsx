import { CheckCircle2 } from "lucide-react";
import type { Program } from "@/lib/programs";
import { getAccent } from "@/lib/program-accent";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export function ProgramThemes({ program }: { program: Program }) {
  const accent = getAccent(program.accentToken);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <Reveal>
        <SectionHeading eyebrow="What It Builds" title="Focus Areas" align="center" />
      </Reveal>
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {program.themes.map((theme, index) => (
          <Reveal key={theme} delay={index * 0.04}>
            <Card className={`flex h-full items-center gap-3 p-5 transition hover:-translate-y-1 ${accent.borderHover}`}>
              <CheckCircle2 className={`h-5 w-5 shrink-0 ${accent.text}`} />
              <p className="font-medium text-slate-100">{theme}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
