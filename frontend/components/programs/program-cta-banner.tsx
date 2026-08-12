import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/programs";
import { enquireHref } from "@/lib/programs";
import { getAccent } from "@/lib/program-accent";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function ProgramCtaBanner({ program }: { program: Program }) {
  const accent = getAccent(program.accentToken);

  return (
    <section className="px-5 py-20 lg:px-8">
      <Reveal>
        <div
          className={`glow-border mx-auto max-w-5xl overflow-hidden rounded-2xl border ${accent.border} ${accent.bgSoft} p-10 text-center md:p-14`}
          style={{ ["--program-glow-gradient" as string]: accent.glowGradient }}
        >
          <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
            Ready to learn more about {program.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Send an enquiry and we&apos;ll get back to you with the details you need.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href={enquireHref(program.slug)}>
                {program.ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
