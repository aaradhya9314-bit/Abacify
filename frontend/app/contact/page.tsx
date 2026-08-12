import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getDisplayPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Abacify",
  description: "Get in touch with Abacify over WhatsApp or send a structured enquiry about our programs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-radial-grid px-5 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">Contact</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">Talk to Abacify</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The fastest way to reach us is WhatsApp. For a structured request with your child&apos;s details and
            program preference, send an enquiry instead.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="glow-border mt-12 grid gap-4 p-8 text-left sm:grid-cols-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-neon-cyan/40"
            >
              <MessageCircle className="h-6 w-6 shrink-0 text-neon-cyan" />
              <div>
                <p className="font-heading text-lg font-semibold text-white">WhatsApp</p>
                <p className="mt-1 text-sm text-slate-400">{getDisplayPhoneNumber()}</p>
              </div>
            </a>

            <Link
              href="/enquire"
              className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-neon-cyan/40"
            >
              <div>
                <p className="font-heading text-lg font-semibold text-white">Send an Enquiry</p>
                <p className="mt-1 text-sm text-slate-400">Structured form for program questions</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-neon-cyan" />
            </Link>
          </Card>
        </Reveal>
      </div>
    </main>
  );
}
