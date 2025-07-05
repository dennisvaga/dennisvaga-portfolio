"use client";

import { useTranslations } from "next-intl";
import AnimatedCounter from "./AnimatedCounter";

type StatProps = {
  value: string;
  label: string;
};

const Stat = ({ value, label }: StatProps) => {
  // Check if value contains a "+" or other non-numeric characters
  const valueIsNumeric = !isNaN(Number(value));
  const numericValue = valueIsNumeric ? value : value.replace(/\D/g, "");

  const suffix = valueIsNumeric ? "" : value.replace(/[0-9]/g, "");

  return (
    <div className="flex flex-col items-center">
      <AnimatedCounter end={numericValue} suffix={suffix} />
      <span className="text-xs md:text-base mt-2 text-muted-foreground">
        {label}
      </span>
    </div>
  );
};

type StatisticsBarProps = {
  delay?: number;
  namespace?: string;
};

export default function StatisticsBar({
  namespace = "StatisticsBar",
}: StatisticsBarProps) {
  const t = useTranslations(namespace);

  const stats = [
    { value: "7+", label: t("years") },
    { value: "26", label: t("projects") },
    { value: "11", label: t("technologies") },
    { value: "900+", label: t("coffeess") },
  ];

  return (
    <div className="relative z-10 mx-auto md:py-20 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center">
        {stats.map((stat, index) => (
          <Stat key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
}
