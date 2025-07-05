"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { Locale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useDirection } from "@/hooks/useDirection";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  options: Array<{ value: string; label: string }>;
  currentValue: string;
  label: string;
  textColor?: string;
};

export default function LocaleSwitcherSelect({
  options,
  currentValue,
  label,
  textColor = "text-white",
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const { isRtl } = useDirection();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale as Locale }
      );
    });
  }

  const currentOption = options.find((option) => option.value === currentValue);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={clsx(
            "relative dark:text-[#f5f5f5] text-sm md:text-base font-medium cursor-pointer inline-flex items-center gap-2 py-3",
            textColor,
            isPending && "transition-opacity opacity-30",
            isRtl ? "pl-2 pr-6 flex-row-reverse" : "pl-2 pr-6"
          )}
          disabled={isPending}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <span className="sr-only">{label}</span>
          <span>{currentOption?.label}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isRtl ? "start" : "end"}>
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSelectChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
