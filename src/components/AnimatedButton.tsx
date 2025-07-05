"use client";

import React from "react";
import { cn } from "@/lib/utils";
import HoverAnimationWrapper from "./HoverAnimationWrapper";

interface AnimatedButtonProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * AnimatedButton - A specialized wrapper for circular button-style components
 */
const AnimatedButton = ({
  children,
  color,
  className = "",
  onClick,
}: AnimatedButtonProps) => {
  return (
    <HoverAnimationWrapper
      variant="button"
      enableTransform={false}
      enableBackgroundOverlay={false}
      enableShadow={false}
      className={cn(
        "bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-2 md:p-3 flex items-center justify-center shadow-lg border-1 dark:border-2 border-slate-300/60 dark:border-slate-600/50 hover:bg-white/100 dark:hover:bg-slate-800/100 hover:border-transparent rounded-full overflow-hidden cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {color ? (
        <div
          style={{
            color: color,
            filter: `drop-shadow(0 0 8px ${color}40)`,
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </HoverAnimationWrapper>
  );
};

export default AnimatedButton;
