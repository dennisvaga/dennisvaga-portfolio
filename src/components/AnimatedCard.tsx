"use client";

import React from "react";
import { cn } from "@/lib/utils";
import HoverAnimationWrapper from "./HoverAnimationWrapper";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * AnimatedCard - A specialized wrapper for card-style components
 */
const AnimatedCard = ({
  children,
  className = "",
  onClick,
}: AnimatedCardProps) => {
  return (
    <HoverAnimationWrapper
      variant="card"
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl bg-card border border-border/40 overflow-hidden cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </HoverAnimationWrapper>
  );
};

export default AnimatedCard;
