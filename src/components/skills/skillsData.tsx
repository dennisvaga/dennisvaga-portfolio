import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiReactquery,
  SiVercel,
  SiDocker,
  SiAmazon,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export const frontendSkills: Skill[] = [
  { name: "React", icon: <FaReact className="h-8 w-8" /> },
  { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="h-8 w-8" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-8 w-8" /> },
  { name: "TanStack Query", icon: <SiReactquery className="h-8 w-8" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="h-8 w-8" /> },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", icon: <FaNodeJs className="h-8 w-8" /> },
  { name: "Express", icon: <SiExpress className="h-8 w-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-8 w-8" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="h-8 w-8" /> },
  { name: "GraphQL", icon: <SiGraphql className="h-8 w-8" /> },
  { name: "REST API", icon: <TbApi className="h-8 w-8" /> },
];

export const toolsSkills: Skill[] = [
  { name: "Python", icon: <FaPython className="h-8 w-8" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="h-8 w-8" /> },
  { name: "Vercel", icon: <SiVercel className="h-8 w-8" /> },
  { name: "Docker", icon: <SiDocker className="h-8 w-8" /> },
  { name: "VS Code", icon: <VscCode className="h-8 w-8" /> },
  { name: "AWS", icon: <SiAmazon className="h-8 w-8" /> },
];
