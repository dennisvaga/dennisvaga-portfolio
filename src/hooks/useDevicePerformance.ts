import { useMemo } from "react";

/**
 * Custom hook for detecting device performance capabilities
 *
 * This hook analyzes various device and browser indicators to determine
 * if the current device might struggle with complex animations and effects.
 *
 * @returns {Object} Performance detection results
 * @returns {boolean} isLowEndDevice - True if device is likely to struggle with animations
 * @returns {boolean} isHighEndDevice - True if device can handle complex animations
 * @returns {boolean} reducedMotionPreferred - True if user prefers reduced motion
 */
export const useDevicePerformance = () => {
  const performanceMetrics = useMemo(() => {
    // Server-side rendering check
    if (typeof window === "undefined") {
      return {
        isLowEndDevice: false,
        isHighEndDevice: false,
        reducedMotionPreferred: false,
      };
    }

    // Check for reduced motion preference
    const reducedMotionPreferred = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Hardware capability indicators - only check CPU cores
    const lowCores = navigator.hardwareConcurrency
      ? navigator.hardwareConcurrency < 4
      : false;

    // Simple detection: only use CPU cores and user preference
    const isLowEndDevice = lowCores || reducedMotionPreferred;

    // High-end device detection
    const isHighEndDevice = 
      navigator.hardwareConcurrency && 
      navigator.hardwareConcurrency >= 8 && 
      !reducedMotionPreferred;

    return {
      isLowEndDevice,
      isHighEndDevice,
      reducedMotionPreferred,
    };
  }, []);

  return performanceMetrics;
};
