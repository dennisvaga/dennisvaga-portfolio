"use client";

/**
 * Photo Component
 *
 * Main container component that combines a portrait image with orbiting tech stack icons.
 * Features:
 * - Responsive sizing based on screen size
 * - Animated tech icons orbiting around the portrait
 * - Subtle gradient and lighting effects
 */

import { useAnimation } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";
import OrbitingTechIcons from "./OrbitingTechIcons";
import PortraitImage from "./PortraitImage";

const Photo = () => {
  // Responsive breakpoint checks for layout adjustments
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isMedium = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");
  const auraControls = useAnimation(); // Controls the subtle glow animation effect
  const [isClient, setIsClient] = useState(false); // Prevents hydration mismatch

  // Determine size based on breakpoint
  const getContainerSize = () => {
    if (isMobile) return 298;
    if (isMedium) return 410; // Medium size for tablet/medium screens
    return 530; // Default desktop size
  };

  const containerSize = getContainerSize();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Create subtle pulsing glow animation
    auraControls.start({
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: isMobile ? 8 : 4,
        repeat: Infinity,
        ease: "linear",
        repeatType: "mirror",
      },
    });
  }, [isMobile, auraControls, isClient]);

  return (
    <div
      className="relative md:mx-auto"
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
      }}
    >
      <OrbitingTechIcons containerSize={containerSize} isClient={isClient} />

      <PortraitImage auraControls={auraControls} isClient={isClient} />
    </div>
  );
};

export default Photo;
