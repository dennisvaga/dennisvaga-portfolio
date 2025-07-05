"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AnimatedCard from "@/components/AnimatedCard";
import { useMediaQuery } from "@/hooks/use-media-query";

interface SkillItemProps {
  name: string;
  icon: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (skillName: string | null) => void;
}

export default function SkillItem({
  name,
  icon,
  isOpen,
  onToggle,
}: SkillItemProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (e: React.MouseEvent) => {
    if (!onToggle) return;

    e.preventDefault();
    e.stopPropagation();
    onToggle(isOpen ? null : name);
  };

  // Conditional tooltip props: controlled for mobile, uncontrolled for desktop
  const tooltipProps = isMobile && isOpen !== undefined ? { open: isOpen } : {}; // Let Radix handle hover automatically on desktop

  return (
    <div>
      <Tooltip {...tooltipProps}>
        <TooltipTrigger asChild>
          <div
            onClick={handleClick}
            className={isMobile ? "cursor-pointer" : ""}
          >
            <AnimatedCard className="bg-[var(--skills-card-bg)] dark:shadow-2xl shadow-sm rounded-xl p-6 flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-[var(--skills-card-hover-from)] hover:to-[var(--skills-card-hover-to)] gap-0">
              <div className="text-[var(--skills-icon-color)] transition-all duration-500 group-hover:text-primary">
                {icon}
              </div>
            </AnimatedCard>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={isMobile ? 0 : 5}>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
