"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { PROGRAM_LIST } from "@/lib/programs";
import { getAccent } from "@/lib/program-accent";

export function ProgramsShowcaseVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="glow-border relative mx-auto grid w-full max-w-[560px] grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-ink/60 p-5 shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-mesh-line bg-[length:36px_36px] opacity-20" />
      {PROGRAM_LIST.map((program, index) => {
        const accent = getAccent(program.accentToken);
        const Icon = program.icon;
        return (
          <motion.div
            key={program.slug}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative"
          >
            <Link
              href={program.href}
              className={`glass flex h-full flex-col justify-between gap-6 rounded-xl border ${accent.border} p-5 transition hover:-translate-y-1 ${accent.borderHover}`}
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg border ${accent.border} ${accent.bgSoft}`}>
                <Icon className={`h-5 w-5 ${accent.text}`} />
              </span>
              <div>
                <p className="font-heading text-base font-semibold text-white">{program.name}</p>
                {program.ageOrClassRange ? (
                  <p className="mt-1 text-xs text-slate-400">{program.ageOrClassRange}</p>
                ) : null}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
