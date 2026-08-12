import type { Program } from "@/lib/programs";

export interface AccentStyle {
  text: string;
  bgDot: string;
  border: string;
  borderHover: string;
  bgSoft: string;
  glowShadow: string;
  glowShadowHover: string;
  gridBg: string;
  glowGradient: string;
}

const ACCENTS: Record<Program["accentToken"], AccentStyle> = {
  abacus: {
    text: "text-program-abacus",
    bgDot: "bg-program-abacus",
    border: "border-program-abacus/30",
    borderHover: "hover:border-program-abacus/55",
    bgSoft: "bg-program-abacus/10",
    glowShadow: "shadow-goldGlow",
    glowShadowHover: "hover:shadow-goldGlow",
    gridBg: "bg-grid-abacus",
    glowGradient: "linear-gradient(135deg, rgba(232,177,76,.8), rgba(232,177,76,.3))",
  },
  chess: {
    text: "text-program-chess",
    bgDot: "bg-program-chess",
    border: "border-program-chess/30",
    borderHover: "hover:border-program-chess/55",
    bgSoft: "bg-program-chess/10",
    glowShadow: "shadow-silverGlow",
    glowShadowHover: "hover:shadow-silverGlow",
    gridBg: "bg-grid-chess",
    glowGradient: "linear-gradient(135deg, rgba(174,184,201,.75), rgba(174,184,201,.25))",
  },
  robotics: {
    text: "text-program-robotics",
    bgDot: "bg-program-robotics",
    border: "border-program-robotics/30",
    borderHover: "hover:border-program-robotics/55",
    bgSoft: "bg-program-robotics/10",
    glowShadow: "shadow-glow",
    glowShadowHover: "hover:shadow-glow",
    gridBg: "bg-grid-robotics",
    glowGradient: "linear-gradient(135deg, rgba(34,211,238,.8), rgba(47,128,237,.35))",
  },
  mathsScience: {
    text: "text-program-mathsScience",
    bgDot: "bg-program-mathsScience",
    border: "border-program-mathsScience/30",
    borderHover: "hover:border-program-mathsScience/55",
    bgSoft: "bg-program-mathsScience/10",
    glowShadow: "shadow-purpleGlow",
    glowShadowHover: "hover:shadow-purpleGlow",
    gridBg: "bg-grid-maths",
    glowGradient: "linear-gradient(135deg, rgba(168,85,247,.8), rgba(47,128,237,.3))",
  },
};

export function getAccent(token: Program["accentToken"]): AccentStyle {
  return ACCENTS[token];
}
