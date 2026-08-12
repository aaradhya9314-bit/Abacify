"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StickyEnquire() {
  return (
    <Link
      href="/enquire"
      className="fixed bottom-4 left-4 right-4 z-40 flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan text-sm font-bold text-white shadow-glow md:hidden"
    >
      Enquire Now
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
