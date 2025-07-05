"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { ComponentProps } from "react";
import clsx from "clsx";
import { useDirection } from "@/hooks/useDirection";

type NavLinkProps = ComponentProps<typeof Link>;

export default function NavLink({ href, children, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { isRtl } = useDirection();

  return (
    <Link
      href={href}
      className={clsx(
        isActive
          ? "text-primary font-medium"
          : "text-[var(--header-text)] hover:text-[var(--header-text-hover)] transition-colors",
        isRtl && "text-right"
      )}
      dir={isRtl ? "rtl" : "ltr"}
      {...props}
    >
      {children}
    </Link>
  );
}
