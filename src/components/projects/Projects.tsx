/**
 * Projects Component
 *
 * Main projects section that displays all portfolio projects in a responsive grid.
 * Features:
 * - Responsive grid layout with smart third-item centering on medium screens
 * - Project data management with translations support
 * - Individual project cards with tech stack, images, and links
 * - RTL support and accessibility considerations
 * - Optimized layout for different screen sizes (mobile, tablet, desktop)
 */
"use client";

import * as React from "react";
import { Project, type ProjectData } from "@/components/projects/Project";
import { useTranslations } from "next-intl";
import { SectionContainer } from "@/layouts/SectionContainer";
import { useDirection } from "@/hooks/useDirection";
import { cn } from "@/lib/utils";

export function Projects() {
  const t = useTranslations("Projects");
  const { textAlign } = useDirection();

  // Project data using translations - add more projects here as needed
  const projects: ProjectData[] = [
    {
      id: "bodyfuel",
      title: t("projectData.bodyfuelShop.title"),
      description: t("projectData.bodyfuelShop.description"),
      stack: [
        "Next.js",
        "TypeScript",
        "ShadCN",
        "Auth.js",
        "TanStack Query",
        "React Hook Form",
        "Vercel AI",
        "AWS S3",
        "Express",
        "PostgreSQL",
        "Prisma",
      ],
      image: "/projects/bodyfuel/bodyfuel-shop.png",
      liveUrl: "https://shop.bodyfuel.dennisvaga.com/",
      githubUrl: "https://github.com/dennisvaga/bodyfuel",
    },
    {
      id: "bodyfuel-admin",
      title: t("projectData.bodyfuelAdmin.title"),
      description: t("projectData.bodyfuelAdmin.description"),
      stack: [
        "Next.js",
        "TypeScript",
        "ShadCN",
        "Auth.js",
        "TanStack Query",
        "React Hook Form",
        "Vercel AI",
        "AWS S3",
        "Express",
        "PostgreSQL",
        "Prisma",
      ],
      image: "/projects/bodyfuel/bodyfuel-admin.png",
      liveUrl: "https://admin.bodyfuel.dennisvaga.com/",
      githubUrl: "https://github.com/dennisvaga/bodyfuel",
    },
    {
      id: "quick-shop",
      title: t("projectData.quickShop.title"),
      description: t("projectData.quickShop.description"),
      stack: [
        "React Native",
        "Expo",
        "TypeScript",
        "NativeWind",
        "TanStack Query",
        "Expo Router",
        "Zod",
        "Lucide React Native",
      ],
      image: "/projects/quick-shop/main.png",
      githubUrl: "https://github.com/dennisvaga/quick-shop",
    },
    // More projects can be added here in the future
  ];

  return (
    <div
      id="projects"
      className="w-full bg-gradient-to-br from-[var(--page-bg-from)] via-[var(--page-bg-midpoint)] to-[var(--page-bg-to)]"
    >
      <SectionContainer className="flex flex-col space-y-20">
        {/* Section heading */}
        <div className={`${textAlign.responsive} flex flex-col gap-4`}>
          <h2 className="text-4xl font-bold tracking-tighter">{t("title")}</h2>
          <p className="text-muted-foreground text-lg">{t("description")}</p>
        </div>

        {/* Projects container - responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-15">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "h-full", // Ensure consistent height
                // Center the third project (index 2) when it's alone in the second row on md screens only
                projects.length === 3 &&
                  index === 2 &&
                  "md:col-span-2 lg:col-span-1 md:flex md:justify-center lg:justify-start"
              )}
            >
              <div
                className={cn(
                  "w-full h-full", // Full height for the inner container too
                  // Limit width of centered third project to match others
                  projects.length === 3 &&
                    index === 2 &&
                    "md:max-w-[calc(50%-0.625rem)] lg:max-w-full"
                )}
              >
                <Project project={project} />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
