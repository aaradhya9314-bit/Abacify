import { Bot, Calculator, Crown, Sigma, type LucideIcon } from "lucide-react";

export type ProgramSlug = "abacus" | "chess" | "ai-robotics" | "maths-science";
export type LearningMode = "online" | "offline";

export interface ProgramLevel {
  label: string;
  theme: string;
}

export interface Program {
  slug: ProgramSlug;
  name: string;
  tagline: string;
  description: string;
  ageOrClassRange: string;
  modes: LearningMode[];
  themes: string[];
  ctaLabel: string;
  accentToken: "abacus" | "chess" | "robotics" | "mathsScience";
  icon: LucideIcon;
  visualMotif: "numeric" | "board" | "circuit" | "formula";
  href: string;
  levels?: ProgramLevel[];
}

export const PROGRAMS: Record<ProgramSlug, Program> = {
  abacus: {
    slug: "abacus",
    name: "Abacus",
    tagline: "Structured mental calculation training built on the abacus.",
    description:
      "Abacify's Abacus program guides learners through a progressive, level-based approach to mental calculation. Using the abacus as a foundation, students build number sense, concentration, and calculation confidence through structured, consistent practice.",
    ageOrClassRange: "Ages 5–15",
    modes: ["online", "offline"],
    themes: [
      "Mental calculation",
      "Number sense",
      "Concentration",
      "Memory",
      "Calculation confidence",
      "Structured practice",
      "Speed and accuracy",
    ],
    ctaLabel: "Enquire About Abacus",
    accentToken: "abacus",
    icon: Calculator,
    visualMotif: "numeric",
    href: "/programs/abacus",
    levels: [
      { label: "Level 1", theme: "Foundations" },
      { label: "Level 2", theme: "Number Sense" },
      { label: "Level 3", theme: "Structured Practice" },
      { label: "Level 4", theme: "Concentration" },
      { label: "Level 5", theme: "Memory" },
      { label: "Level 6", theme: "Mental Calculation" },
      { label: "Level 7", theme: "Calculation Confidence" },
      { label: "Level 8", theme: "Speed & Accuracy" },
    ],
  },
  chess: {
    slug: "chess",
    name: "Chess",
    tagline: "Strategic thinking, patience, and decision-making through chess.",
    description:
      "Abacify's Chess program uses the game as a framework for developing strategic thinking. Learners practice planning, weighing decisions, recognizing patterns, and learning from mistakes — skills that extend well beyond the board.",
    ageOrClassRange: "",
    modes: ["online", "offline"],
    themes: [
      "Strategic thinking",
      "Concentration",
      "Decision making",
      "Planning",
      "Problem solving",
      "Patience",
      "Pattern recognition",
      "Learning from mistakes",
    ],
    ctaLabel: "Enquire About Chess",
    accentToken: "chess",
    icon: Crown,
    visualMotif: "board",
    href: "/programs/chess",
  },
  "ai-robotics": {
    slug: "ai-robotics",
    name: "AI & Robotics",
    tagline: "Modern technology learning through AI fundamentals and robotics.",
    description:
      "Abacify's AI & Robotics program introduces learners to how intelligent systems work, through hands-on, project-based learning. Students explore computational thinking, coding logic, and robotics fundamentals while building creativity through technology.",
    ageOrClassRange: "Ages 7–17",
    modes: ["online", "offline"],
    themes: [
      "AI fundamentals",
      "Robotics",
      "Computational thinking",
      "Coding & logic",
      "Problem solving",
      "Project-based learning",
      "Creativity through technology",
      "Understanding intelligent systems",
    ],
    ctaLabel: "Enquire About AI & Robotics",
    accentToken: "robotics",
    icon: Bot,
    visualMotif: "circuit",
    href: "/programs/ai-robotics",
  },
  "maths-science": {
    slug: "maths-science",
    name: "Maths & Science",
    tagline: "Structured academic support aligned with your child's school curriculum.",
    description:
      "Abacify's Maths & Science program offers structured academic support for Mathematics and Science, aligned with your child's school curriculum. The focus is on conceptual understanding, problem solving, and doubt clarification, building strong fundamentals alongside classroom learning.",
    ageOrClassRange: "Classes 5–8",
    modes: ["online", "offline"],
    themes: [
      "Conceptual understanding",
      "Problem solving",
      "Fundamentals",
      "School curriculum support",
      "Exam preparation",
      "Doubt clarification",
      "Structured learning",
    ],
    ctaLabel: "Enquire About Maths & Science",
    accentToken: "mathsScience",
    icon: Sigma,
    visualMotif: "formula",
    href: "/programs/maths-science",
  },
};

export const PROGRAM_LIST: Program[] = Object.values(PROGRAMS);

export function isProgramSlug(value: string | undefined | null): value is ProgramSlug {
  return !!value && value in PROGRAMS;
}

export function enquireHref(slug?: ProgramSlug) {
  return slug ? `/enquire?program=${slug}` : "/enquire";
}
