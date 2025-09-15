import { useState, useEffect, useRef, useMemo } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { getTechIcons, TechIcon } from "@/components/techIcons";

interface UseOrbitingIconsProps {
  containerSize: number;
  isClient: boolean;
}

interface IconPosition {
  tech: TechIcon;
  left: number;
  top: number;
}

export const useOrbitingIcons = ({
  containerSize,
  isClient,
}: UseOrbitingIconsProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const radius = containerSize * 0.46;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get tech stack icons
  const techIcons: TechIcon[] = getTechIcons(isMobile);

  // Intersection observer for performance optimization
  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isClient]);

  // Memoize position calculations
  const iconPositions: IconPosition[] = useMemo(() => {
    return techIcons.map((tech, index) => {
      const angle = (index / techIcons.length) * 2 * Math.PI;
      const left =
        Math.round((containerSize / 2 + radius * Math.cos(angle)) * 10) / 10;
      const top =
        Math.round((containerSize / 2 + radius * Math.sin(angle)) * 10) / 10;

      return { tech, left, top };
    });
  }, [techIcons, containerSize, radius]);

  const shouldAnimate = isVisible;

  return {
    containerRef,
    iconPositions,
    shouldAnimate,
  };
};
