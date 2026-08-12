import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { PROGRAM_LIST } from "@/lib/programs";
import { getDisplayPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-neon-cyan/25 bg-white/[0.05]">
              <Image src="/abacify_logo.png" alt="Abacify logo" width={36} height={36} className="h-full w-full object-contain" />
            </span>
            <p className="font-heading font-semibold text-white">Abacify</p>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Structured learning in Abacus, Chess, AI & Robotics, and Maths & Science — for parents seeking a
            considered approach to how their child thinks and learns.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Programs</p>
          <ul className="mt-4 grid gap-3 text-sm">
            {PROGRAM_LIST.map((program) => (
              <li key={program.slug}>
                <Link href={program.href} className="text-slate-400 hover:text-white">
                  {program.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Site</p>
          <ul className="mt-4 grid gap-3 text-sm">
            <li>
              <Link href="/about" className="text-slate-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/enquire" className="text-slate-400 hover:text-white">
                Enquire
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Contact & Legal</p>
          <ul className="mt-4 grid gap-3 text-sm">
            <li>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-neon-cyan" />
                {getDisplayPhoneNumber()}
              </a>
            </li>
            <li>
              <Link href="/privacy" className="text-slate-400 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-slate-400 hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-slate-400 hover:text-white">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-6 text-center text-xs text-slate-500 lg:px-8">
        © {new Date().getFullYear()} Abacify. All rights reserved.
      </div>
    </footer>
  );
}
