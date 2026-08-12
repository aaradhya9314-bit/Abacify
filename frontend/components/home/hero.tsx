import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ProgramsShowcaseVisual } from "@/components/home/programs-showcase-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-grid pt-32">
      <div className="absolute inset-0 bg-mesh-line bg-[length:64px_64px] opacity-[0.05]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <Reveal>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-sm font-semibold text-neon-cyan">
              <Sparkles className="h-4 w-4" />
              Abacus · Chess · AI & Robotics · Maths & Science
            </div>
            <h1 className="text-balance font-heading text-5xl font-semibold leading-tight text-white md:text-7xl">
              Build Strong Thinking. Build Strong Foundations.
            </h1>
            <p className="mt-6 max-w-2xl font-heading text-2xl font-medium leading-snug text-slate-100 md:text-3xl">
              Structured programs in calculation, strategy, technology, and academics.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Abacify offers four focused learning programs for children and learners — each built around a
              structured, level-appropriate approach, with both online and offline formats.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#programs">
                  Explore Programs <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/enquire">
                  <MessageCircle className="h-4 w-4" /> Enquire Now
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ProgramsShowcaseVisual />
        </Reveal>
      </div>
    </section>
  );
}
