import type { PropsWithChildren } from "react";
import { Reveal } from "@/components/reveal";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
}

export function LegalPage({ title, lastUpdated, children }: PropsWithChildren<LegalPageProps>) {
  return (
    <main className="bg-midnight px-5 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h1 className="font-heading text-3xl font-semibold text-white md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-8">{children}</div>
        </Reveal>
      </div>
    </main>
  );
}

export function LegalSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 grid gap-3 text-sm leading-7 text-slate-300">{children}</div>
    </section>
  );
}
