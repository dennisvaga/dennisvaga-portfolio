"use client";

import NavLink from "./NavLink";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  path: string;
};

interface DesktopNavProps {
  items: NavItem[];
}

export default function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav className={cn("hidden lg:flex items-center gap-8")}>
      {items.map((item) => (
        <NavLink key={item.path} href={item.path}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
