"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useHoverAnimations } from "@/hooks/useHoverAnimations";

/**
 * Props for the HoverAnimationWrapper component
 */
interface HoverAnimationWrapperProps {
  children: React.ReactNode;
  variant?: "button" | "card";
  className?: string;
  enableBorder?: boolean;
  enableGlow?: boolean;
  enableTransform?: boolean;
  enableAlwaysSpinning?: boolean;
  enableBackgroundOverlay?: boolean;
  enableShadow?: boolean;
  onClick?: () => void;
}

/**
 * HoverAnimationWrapper - Base component for hover animations and effects
 *
 * This component provides a comprehensive set of hover animations including:
 * - Transform animations (scale, translate, rotate)
 * - Gradient borders (spinning and static)
 * - Background overlays
 * - Glow effects
 * - Shadow effects
 */
const HoverAnimationWrapper = ({
  children,
  variant = "button",
  className = "",
  enableBorder = true,
  enableGlow = true,
  enableTransform = true,
  enableAlwaysSpinning = false,
  enableBackgroundOverlay = true,
  enableShadow = true,
  onClick,
}: HoverAnimationWrapperProps) => {
  const {
    isMobile,
    gradientSize,
    animationConfig,
    containerRef,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverAnimations({ variant });

  // Base animation classes - only animation-related, no layout
  const baseAnimationClasses = cn(
    "group relative transition-all duration-300",
    isMobile ? "active:scale-95 duration-150" : "",
    enableTransform && animationConfig.transform,
    enableShadow &&
      !isMobile &&
      "hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3),0_0_40px_rgba(var(--primary-rgb),0.1)]",
    className
  );

  return (
    <div
      ref={containerRef}
      className={baseAnimationClasses}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background overlay effects - Desktop only */}
      {enableBackgroundOverlay && !isMobile && (
        <>
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 group-hover:opacity-100 rounded-[inherit]" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-gradient-to-r from-primary via-blue-500 to-purple-500 blur-sm -z-10 group-hover:opacity-30 group-hover:animate-pulse rounded-[inherit]" />
        </>
      )}

      {/* Spinning animated gradient border - Desktop only */}
      {enableBorder && !isMobile && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-[inherit] overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${gradientSize}px`,
              height: `${gradientSize}px`,
              background: `conic-gradient(from 0deg, hsl(var(--tech-react)), hsl(var(--tech-nextjs)), hsl(var(--tech-shadcn)), hsl(var(--tech-tailwind)), hsl(var(--tech-node)), hsl(var(--tech-react)))`,
              borderRadius: "inherit",
            }}
          />
          <div className="absolute inset-[2px] bg-white/95 dark:bg-slate-800/95 rounded-[inherit]" />
        </div>
      )}

      {/* Static gradient border - Mobile only */}
      {enableBorder && isMobile && (
        <div
          className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-150 p-[2px] rounded-[inherit]"
          style={{
            background: `linear-gradient(135deg, hsl(var(--tech-react)), hsl(var(--tech-nextjs)), hsl(var(--tech-tailwind)), hsl(var(--tech-node)))`,
          }}
        >
          <div className="absolute inset-[2px] bg-white/95 dark:bg-slate-800/95 rounded-[inherit]" />
        </div>
      )}

      {/* Always spinning gradient border - Desktop only */}
      {enableAlwaysSpinning && !isMobile && (
        <div className="absolute inset-0 opacity-100 p-[2px] rounded-[inherit] overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${gradientSize}px`,
              height: `${gradientSize}px`,
              background: `conic-gradient(from 0deg, hsl(var(--tech-react) / 0.6), hsl(var(--tech-nextjs) / 0.6), hsl(var(--tech-shadcn) / 0.6), hsl(var(--tech-tailwind) / 0.6), hsl(var(--tech-node) / 0.6), hsl(var(--tech-react) / 0.6))`,
              borderRadius: "inherit",
            }}
          />
          <div className="absolute inset-[2px] bg-white/95 dark:bg-slate-800/95 rounded-[inherit]" />
        </div>
      )}

      {/* Content with animation scaling */}
      <div
        className={cn(
          "relative z-10 transition-all duration-300",
          animationConfig.contentScale,
          !isMobile &&
            "group-hover:drop-shadow-[0_0_5px_rgba(var(--primary-rgb),0.5)]"
        )}
      >
        {children}
      </div>

      {/* Bottom glow effect - Desktop only */}
      {enableGlow && !isMobile && (
        <div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm",
            animationConfig.glowPosition
          )}
        />
      )}
    </div>
  );
};

export default HoverAnimationWrapper;
