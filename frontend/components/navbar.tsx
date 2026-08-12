"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-midnight/72 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-neon-cyan/30 bg-white/[0.06] shadow-glow">
            <Image src="/abacify_logo.png" alt="Abacify logo" width={40} height={40} className="h-full w-full object-contain" priority />
          </span>
          <span className="font-heading text-lg font-semibold text-white">Abacify</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link href="/enquire">Enquire Now</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-5 mb-4 rounded-xl border border-white/10 bg-ink/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full">
            <Link href="/enquire" onClick={() => setOpen(false)}>
              Enquire Now
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
