import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="bg-radial-grid px-5 py-28 text-center lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">Get Started</p>
          <h2 className="font-heading text-4xl font-semibold text-white md:text-6xl">
            Choose a program. Start the conversation.
          </h2>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/enquire">Send an Enquiry</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
