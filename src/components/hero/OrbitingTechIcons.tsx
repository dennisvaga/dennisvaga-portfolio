"use client";

/**
 * OrbitingTechIcons Component
 *
 * Renders tech stack icons that orbit around a central point with smooth animations.
 * Features:
 * - Responsive icon sizing based on screen size
 * - Circular orbital positioning with even distribution
 * - Enhanced hover effects with gradient borders and glows
 * - Performance optimizations using Intersection Observer
 * - Smooth entry animations with staggered delays
 */

import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import { useOrbitingIcons } from "@/hooks/useOrbitingIcons";

interface OrbitingTechIconsProps {
  containerSize: number;
  isClient: boolean;
}

const OrbitingTechIcons = ({
  containerSize,
  isClient,
}: OrbitingTechIconsProps) => {
  const { containerRef, iconPositions, shouldAnimate } = useOrbitingIcons({
    containerSize,
    isClient,
  });

  if (!isClient) return null;

  return (
    <>
      {/* Orbiting icons animated in a circular path */}
      <div
        ref={containerRef}
        className={`absolute inset-0 w-full h-full z-20 origin-center pointer-events-none ${
          shouldAnimate ? "orbit-animation" : ""
        }`}
        style={{
          willChange: shouldAnimate ? "transform" : "auto",
          animation: shouldAnimate ? "orbit 40s linear infinite" : "none",
        }}
      >
        {iconPositions.map((item, index) => (
          <div
            key={index}
            className="absolute pointer-events-auto"
            style={{
              left: `${item.left}px`,
              top: `${item.top}px`,
              transform: "translate(-50%, -50%)", // Center the icon at its calculated position
            }}
          >
            <AnimatedButton color={item.tech.color}>
              {item.tech.icon}
            </AnimatedButton>
          </div>
        ))}
      </div>

      {/* Static circular stroke for orbit reference */}
      <svg className="absolute inset-0 w-full h-full z-0">
        <motion.circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="var(--primary)"
          strokeOpacity="0.2"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 5"
          initial={{ pathLength: 1 }}
          whileHover={{
            pathLength: [1, 0, 1],
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          whileTap={{
            pathLength: [1, 0, 1],
            transition: { duration: 1, ease: "easeInOut" },
          }}
        />
      </svg>

      {/* CSS animation for orbit with hardware acceleration */}
      <style jsx global>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translate3d(0, 0, 0);
          }
          100% {
            transform: rotate(360deg) translate3d(0, 0, 0);
          }
        }
      `}</style>
    </>
  );
};

export default OrbitingTechIcons;
