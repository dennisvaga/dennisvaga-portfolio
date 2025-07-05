import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiShadcnui,
  SiTypescript,
  SiAuth0,
  SiReactquery,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiAmazon,
  SiOpenai,
  SiExpo,
  SiZod,
} from "react-icons/si";
import { TbApi, TbTable, TbBrandReactNative } from "react-icons/tb";

export interface TechIcon {
  icon: React.ReactNode;
  color: string;
}

// Comprehensive tech stack icons mapping with consistent muted colors for project badges
export const techStackIcons: Record<string, TechIcon> = {
  // Frontend
  React: {
    icon: <FaReact size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "Next.js": {
    icon: <SiNextdotjs size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  TypeScript: {
    icon: <SiTypescript size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  ShadCN: {
    icon: <SiShadcnui size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  Tailwind: {
    icon: <SiTailwindcss size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "TanStack Query": {
    icon: <SiReactquery size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "TanStack Table": {
    icon: <TbTable size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "React Hook Form": {
    icon: <FaReact size={16} />,
    color: "hsl(var(--muted-foreground))",
  },

  // Mobile Development
  "React Native": {
    icon: <TbBrandReactNative size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  Expo: {
    icon: <SiExpo size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  NativeWind: {
    icon: <SiTailwindcss size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "Expo Router": {
    icon: <SiExpo size={16} />,
    color: "hsl(var(--muted-foreground))",
  },

  // Validation & APIs
  Zod: {
    icon: <SiZod size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "Lucide React Native": {
    icon: <FaReact size={16} />,
    color: "hsl(var(--muted-foreground))",
  },

  // Backend & APIs
  "Node.js": {
    icon: <FaNodeJs size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  Express: {
    icon: <SiExpress size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  PostgreSQL: {
    icon: <SiPostgresql size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  Prisma: {
    icon: <SiPrisma size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "REST API": {
    icon: <TbApi size={16} />,
    color: "hsl(var(--muted-foreground))",
  },

  // Authentication & AI
  "Auth.js": {
    icon: <SiAuth0 size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "Vercel AI": {
    icon: <SiOpenai size={16} />,
    color: "hsl(var(--muted-foreground))",
  },

  // Cloud & Deployment
  Vercel: {
    icon: <SiVercel size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
  "AWS S3": {
    icon: <SiAmazon size={16} />,
    color: "hsl(var(--muted-foreground))",
  },
};

// Original orbiting icons function (keeping for backward compatibility)
export const getTechIcons = (isMobile: boolean): TechIcon[] => [
  {
    icon: <FaReact size={isMobile ? 23 : 24} />,
    color: "hsl(var(--tech-react))",
  },
  {
    icon: <SiNextdotjs size={isMobile ? 23 : 24} />,
    color: "hsl(var(--tech-nextjs))",
  },
  {
    icon: <SiShadcnui size={isMobile ? 23 : 24} />,
    color: "hsl(var(--tech-shadcn))",
  },
  {
    icon: <SiTailwindcss size={isMobile ? 23 : 24} />,
    color: "hsl(var(--tech-tailwind))",
  },
  {
    icon: <SiVercel size={isMobile ? 23 : 24} />,
    color: "hsl(var(--tech-shadcn))",
  },
  {
    icon: <FaNodeJs size={isMobile ? 23 : 24} />,
    color: "hsl(var(--tech-node))",
  },
];

// Helper function to get icon for a tech stack item
export const getTechStackIcon = (techName: string): TechIcon | null => {
  return techStackIcons[techName] || null;
};
