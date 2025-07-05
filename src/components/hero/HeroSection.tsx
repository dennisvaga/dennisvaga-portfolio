"use client";

import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/useDirection";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import Photo from "./Photo";
import StatisticsBar from "./StatisticsBar";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const { textAlign } = useDirection();

  return (
    <section
      className={`relative overflow-hidden pt-10 ${textAlign.responsive}`}
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--hero-gradient-from)] via-[var(--hero-midpoint)] to-[var(--hero-gradient-to)] z-0"></div>

      {/* Pattern overlay - theme aware with different approaches */}
      {/* Dark mode: dot pattern */}
      <div className="absolute inset-0 z-0 opacity-20 dark:block hidden">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')] bg-[length:20px_20px]"></div>
      </div>

      {/* Light mode: subtle geometric pattern */}
      <div className="absolute inset-0 z-0 opacity-18 dark:hidden block">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjM2NmYxIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-[length:40px_40px]"></div>
      </div>

      {/* Main content */}
      <div className="max-w-screen-xl relative z-10 mx-auto px-6 flex flex-col gap-10 md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="max-w-xl order-1 md:order-1">
          <p className="text-primary mb-2 font-mono">{t("role")}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t("greeting")}
            <span className="block text-primary mt-2">{t("name")}</span>
          </h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-[450px]">
            {t("description")}
          </p>

          {/* Buttons - show after text on desktop, but will be reordered on mobile */}
          <div className="hidden md:block">
            <div className="flex flex-row flex-wrap gap-4 justify-start">
              <Button asChild size="lg" className="text-white">
                <Link href="/contact">{t("getInTouch")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">{t("viewMyWork")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="order-2 md:order-2">
          <Photo />
        </div>

        {/* Call-to-action buttons - mobile only */}
        <div className="order-3 md:hidden w-full">
          <div className="flex flex-row gap-4 justify-center min-[300px]:flex-nowrap flex-wrap">
            <Button
              asChild
              size="lg"
              className="text-white flex-1 min-[300px]:flex-none min-[300px]:w-auto"
            >
              <Link href="/contact">{t("getInTouch")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="flex-1 min-[300px]:flex-none min-[300px]:w-auto"
            >
              <Link href="/projects">{t("viewMyWork")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <StatisticsBar />
    </section>
  );
}
