import { useLocale } from "next-intl";

export function useDirection() {
  const locale = useLocale();
  const isRtl = locale === "he" || locale === "ar";

  return {
    isRtl,
    dir: isRtl ? "rtl" : "ltr",
    textAlign: {
      start: isRtl ? "right" : "left",
      end: isRtl ? "left" : "right",
      responsive: isRtl
        ? "text-center md:text-right"
        : "text-center md:text-left",
    },
    objectPosition: {
      start: isRtl ? "object-left" : "object-right",
      end: isRtl ? "object-right" : "object-left",
      center: "object-center",
      startClass: isRtl
        ? "object-right md:object-right"
        : "object-center md:object-left",
      endClass: isRtl
        ? "object-left md:object-left"
        : "object-center md:object-right",
      centerClass: "object-center",
    },
  };
}
