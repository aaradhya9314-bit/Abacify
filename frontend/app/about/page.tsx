import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/home/about-section";

export const metadata: Metadata = {
  title: "About Abacify | Structured Learning Programs",
  description:
    "Abacify offers structured learning programs in Abacus, Chess, AI & Robotics, and Maths & Science — built around clarity, structure, and parent-focused communication.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="pt-32">
      <div className="mx-auto max-w-4xl px-5 pb-8 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">About Abacify</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">
            A considered approach to how children think and learn
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Abacify runs four structured learning programs — Abacus, Chess, AI & Robotics, and Maths & Science.
            Each program follows its own clear structure, available both online and offline, and is built to
            progress with the learner rather than follow a single fixed format.
          </p>
          <div className="mt-9 flex justify-center">
            <Button asChild size="lg">
              <Link href="/programs">
                View Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
      <AboutSection />
    </main>
  );
}
