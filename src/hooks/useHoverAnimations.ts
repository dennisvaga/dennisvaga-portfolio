import { useState, useRef, useEffect, useMemo } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface UseHoverAnimationsProps {
  variant?: "button" | "card";
}

interface AnimationConfig {
  transform: string;
  contentScale: string;
  borderInset: string;
  glowPosition: string;
}

/**
 * Custom hook for managing hover animations and effects
 *
 * This hook handles:
 * - Hover state management
 * - Dimension calculations for gradient borders
 * - Mobile/desktop interaction patterns
 * - Animation configurations for different variants
 */
export const useHoverAnimations = ({
  variant = "button",
}: UseHoverAnimationsProps = {}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Calculate dimensions for rotating gradient
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate gradient size for rotation coverage
  const gradientSize = useMemo(() => {
    const diagonalLength = Math.sqrt(
      dimensions.width ** 2 + dimensions.height ** 2
    );
    return Math.max(diagonalLength * 2.2, 300);
  }, [dimensions]);

  // Animation configurations for different variants
  const animationConfig: AnimationConfig = useMemo(() => {
    const configs = {
      button: {
        transform: isMobile ? "" : "hover:-translate-y-1 hover:scale-105",
        contentScale: isMobile
          ? "group-active:scale-95"
          : "group-hover:scale-105",
        borderInset: "inset-[-60px]",
        glowPosition: "-bottom-6",
      },
      card: {
        transform: isMobile ? "" : "hover:-translate-y-2",
        contentScale: isMobile
          ? "group-active:scale-95"
          : "group-hover:scale-[1.02]",
        borderInset: "inset-[-280px]",
        glowPosition: "-bottom-10",
      },
    };

    return configs[variant];
  }, [variant, isMobile]);

  // Hover event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return {
    // State
    isHovered,
    isMobile,
    dimensions,
    gradientSize,
    animationConfig,

    // Refs
    containerRef,

    // Event handlers
    handleMouseEnter,
    handleMouseLeave,
  };
};
