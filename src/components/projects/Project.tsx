"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDirection } from "@/hooks/useDirection";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaGithub } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { getTechStackIcon } from "@/components/techIcons";

// Define a type for project sections
export type ProjectSection = {
  name: string;
  description: string;
};

// Define a type for project data
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  stack: string[];
  sections?: ProjectSection[];
  image: string; // Single image URL
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectProps {
  project: ProjectData;
}

export function Project({ project }: ProjectProps) {
  const { isRtl, textAlign } = useDirection();
  const t = useTranslations("Projects");

  return (
    // Container to control width and center the card
    <div
      className={cn(
        "w-full flex",
        // Center on smaller screens
        "justify-center",
        // Language-based alignment on larger screens
        "md:justify-start",
        isRtl && "md:justify-start"
      )}
    >
      <Card className="flex flex-col justify-between overflow-hidden border rounded-lg pt-0 max-w-[600px] gap-2 h-full">
        {/* Project screenshot */}
        <div className="w-full h-[300px] md:h-[450px] relative">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top rounded-t-md"
          />
        </div>

        {/* Title and description */}
        <CardHeader className={`p-6 space-y-2 ${textAlign.responsive}`}>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            {project.title}
          </CardTitle>
          <Separator></Separator>
          <CardDescription className="text-base mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 pt-0 space-y-6">
          {/* Tech stack badges */}
          <div
            className={`flex flex-wrap gap-2 justify-center md:justify-start`}
          >
            {project.stack.map((tech) => {
              const techIcon = getTechStackIcon(tech);
              return (
                <Badge key={tech} variant="outline" className="text-sm ">
                  {techIcon && (
                    <span className="mr-1" style={{ color: techIcon.color }}>
                      {techIcon.icon}
                    </span>
                  )}
                  {tech}
                </Badge>
              );
            })}
          </div>
        </CardContent>

        {/* Action buttons */}
        <CardFooter
          className={`p-6 pt-2 flex flex-wrap gap-4 justify-center md:justify-start`}
        >
          {project.liveUrl && (
            <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  className={`${isRtl ? "ml-2" : "mr-2"} h-4 w-4`}
                />
                {t("liveDemo")}
              </a>
            </Button>
          )}

          {project.githubUrl && (
            <Button variant="outline" disabled={true} asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className={`${isRtl ? "ml-2" : "mr-2"} h-4 w-4`} />
                {t("github")}
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
