import type { Program } from "@/lib/programs";

const NUMERALS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const FORMULAS = ["∑", "π", "√", "∞", "Δ", "θ", "≈", "∫"];

export function MotifBand({ motif }: { motif: Program["visualMotif"] }) {
  if (motif === "numeric") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-6 overflow-hidden pt-10 opacity-[0.09]">
        {NUMERALS.map((digit, index) => (
          <span key={`${digit}-${index}`} className="font-heading text-7xl font-bold text-program-abacus">
            {digit}
          </span>
        ))}
      </div>
    );
  }

  if (motif === "board") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#AEB8C9 0% 25%, transparent 0% 50%)",
          backgroundSize: "56px 56px",
        }}
      />
    );
  }

  if (motif === "circuit") {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-72 overflow-hidden opacity-[0.12]">
        <div className="absolute inset-0 bg-mesh-line bg-[length:40px_40px]" />
        <div className="absolute left-1/4 top-10 h-24 w-24 rounded-full border border-program-robotics/50" />
        <div className="absolute right-1/4 top-16 h-16 w-16 rounded-full border border-program-robotics/50" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-8 overflow-hidden pt-8 opacity-[0.1]">
      {FORMULAS.map((symbol, index) => (
        <span key={`${symbol}-${index}`} className="font-heading text-6xl font-bold text-program-mathsScience">
          {symbol}
        </span>
      ))}
    </div>
  );
}
