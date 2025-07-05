"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import DesktopNav from "./DesktopNav";
import MobileDrawerNav from "./MobileDrawerNav";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { JetBrains_Mono } from "next/font/google";
import { useDirection } from "@/hooks/useDirection";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme-toggle";

// Load JetBrains Mono font
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["700"], // Bold weight for the logo
});

export default function Header() {
  const t = useTranslations("Navigation");
  const { isRtl } = useDirection();

  // Define navigation items
  const navItems = [
    { label: t("about"), path: "/" },
    // { label: t("about-me"), path: "/#about-me" },
    // { label: t("skills"), path: "/#skills" },
    { label: t("projects"), path: "/projects" },
    { label: t("contact"), path: "/contact" },
  ];

  return (
    <header className="sticky top-0 py-5 md:px-10 bg-[var(--header-bg)]/80 backdrop-blur-md z-50 dark:shadow-xl shadow-md">
      <div
        className={cn(
          "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        )}
      >
        <Link
          href="/"
          className={`${jetBrainsMono.className} text-[var(--header-text)] font-bold flex items-baseline`}
          style={{ fontSize: "24px", direction: "ltr" }}
        >
          Dennis Vaga
          <span className="text-primary" style={{ fontSize: "32px" }}>
            .
          </span>
        </Link>

        {/* ---- Desktop navigation ------*/}
        <DesktopNav items={navItems} />
        {/* Language switcher and hire me button */}
        <div
          className={cn(
            "hidden lg:flex items-center gap-4",
            isRtl && "flex-row-reverse"
          )}
        >
          <ModeToggle />
          <LocaleSwitcher textColor="text-dark" />
          <Button className="text-[#ffffff]" asChild>
            <Link href="/contact">{t("hireMe")}</Link>
          </Button>
        </div>

        {/* ----- Mobile navigation ----- */}
        <MobileDrawerNav items={navItems} hireMeText={t("hireMe")} />
      </div>
    </header>
  );
}
