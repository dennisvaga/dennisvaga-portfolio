"use client";

import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

type AnimatedCounterProps = {
  end: number | string;
  duration?: number;
  suffix?: string;
  decimals?: number;
};

export default function AnimatedCounter({
  end,
  duration = 2.5,
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState<string>("0");
  const ref = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isNaN(Number(end))) return;

    const endValue = Number(end);

    // If on mobile, just show the final value without animation
    if (!isDesktop) {
      setCount(endValue.toFixed(decimals));
      return;
    }

    let startTimestamp: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );

      // Exponential easing (slow at the end)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const current = (eased * endValue).toFixed(decimals);
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue.toFixed(decimals)); // ensure final value
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, decimals, isDesktop]);

  return (
    <span
      ref={ref}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--counter-text)]"
      style={{ unicodeBidi: "isolate" }}
    >
      <bdi>
        {count}
        {suffix}
      </bdi>
    </span>
  );
}
