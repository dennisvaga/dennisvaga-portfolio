"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDirection } from "@/hooks/useDirection";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { isRtl } = useDirection();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={cn(
            "fixed bottom-6 p-3 hover:cursor-pointer rounded-full shadow-lg z-50 w-12 h-12 flex items-center justify-center border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200",
            isRtl ? "left-6" : "right-6"
          )}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}
