"use client";

import * as React from "react";
import { Project, type ProjectData } from "@/components/projects/Project";
import { useTranslations } from "next-intl";
import { SectionContainer } from "@/layouts/SectionContainer";
import { useDirection } from "@/hooks/useDirection";

export function Projects() {
  const t = useTranslations("Projects");
  const { textAlign } = useDirection();

  // Project data using translations - add more projects here as needed
  const projects: ProjectData[] = [
    {
      id: "bodyfuel-shop",
      title: t("projectData.bodyfuelShop.title"),
      description: t("projectData.bodyfuelShop.description"),
      stack: [
        "Next.js",
        "TypeScript",
        "ShadCN UI",
        "Auth.js",
        "TanStack Query",
        "React Hook Form",
        "Vercel AI SDK",
        "Express.js API",
        "PostgreSQL",
        "Prisma ORM",
        "AWS S3",
      ],
      sections: [
        {
          name: t("projectData.bodyfuelShop.sections.ecommerce.name"),
          description: t(
            "projectData.bodyfuelShop.sections.ecommerce.description"
          ),
        },
        {
          name: t("projectData.bodyfuelShop.sections.aiChat.name"),
          description: t(
            "projectData.bodyfuelShop.sections.aiChat.description"
          ),
        },
        {
          name: t("projectData.bodyfuelShop.sections.authentication.name"),
          description: t(
            "projectData.bodyfuelShop.sections.authentication.description"
          ),
        },
        {
          name: t("projectData.bodyfuelShop.sections.productVariants.name"),
          description: t(
            "projectData.bodyfuelShop.sections.productVariants.description"
          ),
        },
      ],
      image: "/projects/bodyfuel/bodyfuel-shop-full.png",
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
        "ShadCN UI",
        "TanStack Table",
        "React Hook Form",
        "Express.js API",
        "PostgreSQL",
        "Prisma ORM",
        "AWS S3",
      ],
      sections: [
        {
          name: t("projectData.bodyfuelAdmin.sections.dashboard.name"),
          description: t(
            "projectData.bodyfuelAdmin.sections.dashboard.description"
          ),
        },
        {
          name: t("projectData.bodyfuelAdmin.sections.inventory.name"),
          description: t(
            "projectData.bodyfuelAdmin.sections.inventory.description"
          ),
        },
        {
          name: t("projectData.bodyfuelAdmin.sections.orders.name"),
          description: t(
            "projectData.bodyfuelAdmin.sections.orders.description"
          ),
        },
      ],
      image: "/projects/bodyfuel/bodyfuel-admin-full.png",
      liveUrl: "https://admin.bodyfuel.dennisvaga.com/",
      githubUrl: "https://github.com/dennisvaga/bodyfuel",
    },
    // More projects can be added here in the future
  ];

  return (
    <div id="projects" className="w-full bg-[var(--projects-bg)]">
      <SectionContainer className="flex flex-col space-y-8">
        {/* Section heading */}
        <div className={`${textAlign.responsive} flex flex-col gap-4`}>
          <h2 className="text-4xl font-bold tracking-tighter">{t("title")}</h2>
          <p className="text-muted-foreground text-lg">{t("description")}</p>
        </div>

        {/* Projects container - add space between each project */}
        <div className="flex lg:flex-row flex-col gap-5">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
