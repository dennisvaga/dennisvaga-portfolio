"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link, usePathname } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { cn } from "@/lib/utils";
import { useDirection } from "@/hooks/useDirection";
import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/theme-toggle";

type NavItem = {
  label: string;
  path: string;
};

interface MobileDrawerNavProps {
  items: NavItem[];
  hireMeText: string;
}

export default function MobileDrawerNav({
  items,
  hireMeText,
}: MobileDrawerNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isRtl } = useDirection();
  const t = useTranslations("Navigation");

  // Handle navigation with animation delay
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.href;

      // Close drawer first
      setOpen(false);

      // Wait for drawer animation to complete before navigating
      setTimeout(() => {
        window.location.href = href;
      }, 600); // Adjust timing to match your drawer animation duration
    },
    []
  );

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      direction={isRtl ? "left" : "right"}
    >
      <DrawerTrigger asChild>
        <button className="lg:hidden text-dark" aria-label="Open menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </DrawerTrigger>

      <DrawerContent className="p-6">
        <DrawerHeader className="p-0">
          <DrawerTitle
            className={cn("text-2xl font-bold", isRtl && "text-right")}
          >
            {t("menu")}
          </DrawerTitle>
          <DrawerClose
            className={cn(
              "absolute top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              isRtl ? "left-4" : "right-4"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Close</span>
          </DrawerClose>
        </DrawerHeader>

        <nav className="mt-8 flex flex-col space-y-6">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                pathname === item.path
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary transition-colors",
                "text-lg",
                isRtl && "text-right"
              )}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-border">
            <div className="mb-6">
              {" "}
              <p
                className={cn(
                  "text-sm text-muted-foreground mb-2",
                  isRtl && "text-right"
                )}
              >
                {t("language")}
              </p>
              <LocaleSwitcher textColor="text-foreground" />
            </div>

            <div className="mb-6">
              <p
                className={cn(
                  "text-sm text-muted-foreground mb-2",
                  isRtl && "text-right"
                )}
              >
                {t("theme")}
              </p>

              <ModeToggle />
            </div>

            <Button asChild className="w-full">
              <Link href="/contact" onClick={handleNavClick}>
                {hireMeText}
              </Link>
            </Button>
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
