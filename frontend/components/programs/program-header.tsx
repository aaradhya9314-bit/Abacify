import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/programs";
import { enquireHref } from "@/lib/programs";
import { getAccent } from "@/lib/program-accent";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { ProgramModeBadge } from "@/components/programs/program-mode-badge";

export function ProgramHeader({ program }: { program: Program }) {
  const accent = getAccent(program.accentToken);
  const Icon = program.icon;

  return (
    <div className="relative mx-auto max-w-4xl text-center">
      <Reveal>
        <span
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border ${accent.border} ${accent.bgSoft}`}
        >
          <Icon className={`h-8 w-8 ${accent.text}`} />
        </span>
        <p className={`mt-6 text-xs font-bold uppercase tracking-[0.24em] ${accent.text}`}>Abacify Program</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">{program.name}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">{program.description}</p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {program.ageOrClassRange ? (
            <span className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-1.5 text-sm font-semibold text-slate-200">
              {program.ageOrClassRange}
            </span>
          ) : null}
          {program.modes.map((mode) => (
            <ProgramModeBadge key={mode} mode={mode} />
          ))}
        </div>

        <div className="mt-9 flex justify-center">
          <Button asChild size="lg">
            <Link href={enquireHref(program.slug)}>
              {program.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
