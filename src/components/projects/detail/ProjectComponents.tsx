/**
 * ProjectApplications Component
 *
 * Displays a grid of related applications/components for a specific project.
 * Features:
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
 * - Smart centering for third item when exactly 3 applications exist
 * - Application cards with images, descriptions, and live demo links
 * - Hover effects and consistent card heights
 * - RTL support and internationalization
 */
"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/useDirection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectApplication {
  name: string;
  description: string;
  liveUrl?: string;
  image: string;
}

interface ProjectApplicationsProps {
  applications: ProjectApplication[];
}

export function ProjectApplications({
  applications,
}: ProjectApplicationsProps) {
  const t = useTranslations("ProjectDetail");
  const { textAlign, isRtl } = useDirection();

  return (
    <div className="space-y-8">
      <div className={textAlign.responsive}>
        <h3 className="text-3xl font-bold mb-4">{t("projectApplications")}</h3>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {t("applicationsDescription")}
        </p>
      </div>

      {/* Applications container - responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-15">
        {applications.map((application, index) => (
          <div
            key={index}
            className={cn(
              "h-full", // Ensure consistent height
              // Center the third application (index 2) when it's alone in the second row on md screens only
              applications.length === 3 &&
                index === 2 &&
                "md:col-span-2 lg:col-span-1 md:flex md:justify-center lg:justify-start"
            )}
          >
            <div
              className={cn(
                "w-full h-full", // Full height for the inner container too
                // Limit width of centered third application to match others
                applications.length === 3 &&
                  index === 2 &&
                  "md:max-w-[calc(50%-0.625rem)] lg:max-w-full"
              )}
            >
              <Card className="flex flex-col justify-between overflow-hidden border rounded-xl pt-0 gap-1 h-full w-full">
                {/* Application Image */}
                <div className="w-full h-80 relative overflow-hidden">
                  <Image
                    src={application.image}
                    alt={`${application.name} screenshot`}
                    fill
                    className="object-cover object-top rounded-t-xl"
                  />
                </div>

                {/* Title and action buttons */}
                <CardHeader
                  className={`p-6 pb-4 space-y-3 ${textAlign.responsive}`}
                >
                  <CardTitle className="flex items-center justify-between text-xl font-bold leading-tight">
                    <span>{application.name}</span>
                    {application.liveUrl && (
                      <Button size="sm" asChild>
                        <a
                          href={application.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink
                            className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`}
                          />
                          {t("visit")}
                        </a>
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {application.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
