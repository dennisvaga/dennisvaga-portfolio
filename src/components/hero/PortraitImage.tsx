"use client";

/**
 * PortraitImage Component
 *
 * Renders a portrait image with subtle glow effects and animated overlays.
 * Features:
 * - Responsive image quality based on screen size
 * - Animated entrance with scale and opacity transitions
 * - Subtle darkness overlay to reduce brightness
 * - Animated gradient overlay with pulsing glow effect
 * - Optimized image loading with Next.js Image component
 */

import { motion, AnimationControls } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

interface PortraitImageProps {
  auraControls: AnimationControls; // Animation controls from framer-motion
  isClient: boolean;
}

const PortraitImage = ({ auraControls, isClient }: PortraitImageProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <motion.div
      className="absolute scale-115 inset-[15%] z-10 rounded-full overflow-hidden shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] pointer-events-none select-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: isMobile ? 0.6 : 1 }}
    >
      <Image
        src="/portrait/portrait-800x1200.png"
        priority
        quality={isMobile ? 90 : 100}
        fill
        alt=""
        className={`object-contain ${
          isMobile ? "scale-120" : "scale-115"
        } translate-y-4 pointer-events-none select-none`}
        draggable={false}
      />

      {isClient && (
        <>
          {/* Subtle darkness overlay to reduce brightness */}
          <div className="absolute inset-0 dark:bg-black/15 bg-black/5" />

          {/* Animated gradient overlay with pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent dark:to-black/60 to-black/10"
            animate={auraControls}
          />
        </>
      )}
    </motion.div>
  );
};

export default PortraitImage;
