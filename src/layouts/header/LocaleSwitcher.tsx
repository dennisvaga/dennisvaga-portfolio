import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

// Define fixed language names that won't change regardless of locale
const LANGUAGE_NAMES = {
  en: "English",
  he: "עברית",
};

type LocaleSwitcherProps = {
  textColor?: string;
};

export default function LocaleSwitcher({
  textColor,
}: LocaleSwitcherProps = {}) {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const options = routing.locales.map((cur) => ({
    value: cur,
    label: LANGUAGE_NAMES[cur as keyof typeof LANGUAGE_NAMES],
  }));

  return (
    <LocaleSwitcherSelect
      currentValue={locale}
      options={options}
      label={t("label")}
      textColor={textColor}
    />
  );
}
