/**
 * ProjectDetail Component
 *
 * Main component for displaying detailed information about a specific project.
 * Features:
 * - Full project information (title, description, tech stack, features)
 * - Navigation back to projects list
 * - Links to live demo and GitHub repository
 * - Demo credentials display when available
 * - RTL support and responsive design
 * - Accepts custom children content for project-specific sections
 */
"use client";

import * as React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/useDirection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTechStackIcon } from "@/components/techIcons";
import { PageWrapper } from "@/layouts/PageWrapper";
import { SectionContainer } from "@/layouts/SectionContainer";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export interface ProjectDetailData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  applications?: {
    name: string;
    description: string;
    liveUrl?: string;
    image: string;
  }[];
  images: string[];
  liveUrl?: string;
  githubUrl: string;
  demoCredentials?: {
    email: string;
    password: string;
  };
}

interface ProjectDetailProps {
  project: ProjectDetailData;
  children?: React.ReactNode;
}

export function ProjectDetail({ project, children }: ProjectDetailProps) {
  const t = useTranslations("ProjectDetail");
  const { isRtl, textAlign } = useDirection();

  return (
    <PageWrapper>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[var(--page-bg-from)] via-[var(--page-bg-midpoint)] to-[var(--page-bg-to)]">
        {/* Background */}

        <SectionContainer className="relative z-10 py-12 space-y-12">
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/projects">
                <ArrowLeft className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
                {t("backToProjects")}
              </Link>
            </Button>

            <div className="flex gap-3">
              {project.liveUrl && (
                <Button asChild size="sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink
                      className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`}
                    />
                    {t("liveDemo")}
                  </a>
                </Button>
              )}

              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                  {t("github")}
                </a>
              </Button>
            </div>
          </div>

          <div className="max-w-3xl">
            {/* Project Header */}

            <div className={`${textAlign.responsive} space-y-12`}>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <p className="text-xl text-muted-foreground mb-6">
                    {project.subtitle}
                  </p>
                )}
                <p
                  className={`text-lg leading-relaxed max-w-4xl ${textAlign.responsive}`}
                >
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => {
                  const techIcon = getTechStackIcon(tech);
                  return (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm px-3 py-1"
                    >
                      {techIcon && (
                        <span
                          className={`${isRtl ? "ml-2" : "mr-2"}`}
                          style={{ color: techIcon.color }}
                        >
                          {techIcon.icon}
                        </span>
                      )}
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>

          <Separator />

          {/* Custom Content */}
          {children}

          {/* Features Section */}
          {project.features.length > 0 && (
            <Card>
              <CardContent className="p-8">
                <h3
                  className={`text-2xl font-semibold mb-6 ${textAlign.responsive}`}
                >
                  {t("keyFeatures")}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`relative ${isRtl ? "pr-6" : "pl-6"} ${textAlign.responsive}`}
                    >
                      <div
                        className={`absolute w-2 h-2 rounded-full bg-primary mt-2 ${
                          isRtl ? "right-0" : "left-0"
                        }`}
                      />
                      <p className="text-base leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Demo Credentials */}
          {project.demoCredentials && (
            <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-800 items-center">
              <CardContent className="p-6">
                <h3
                  className={`text-lg font-semibold mb-4 ${textAlign.responsive}`}
                >
                  {t("demoCredentials")}
                </h3>
                <div className={`space-y-2 text-sm ${textAlign.responsive}`}>
                  <p>
                    <span className="font-medium">{t("email")}:</span>{" "}
                    <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                      {project.demoCredentials.email}
                    </code>
                  </p>
                  <p>
                    <span className="font-medium">{t("password")}:</span>{" "}
                    <code className="bg-white dark:bg-gray-800 px-2 py-1 rounded">
                      {project.demoCredentials.password}
                    </code>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </SectionContainer>
      </div>
    </PageWrapper>
  );
}
