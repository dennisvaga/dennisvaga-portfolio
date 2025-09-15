import type { Metadata } from "next";
import { Assistant, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/layouts/header/Header";
import Providers from "./Providers";
import ScrollToTop from "@/components/ScrollToTop";
import v_icon from "../../../public/v_icon.png";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

const AssistantFont = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
});

// Generate static params for each supported locale
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Generate page metadata dynamically (optional)
type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `Dennis Vaga Portfolio – ${locale}`,
    description: "Professional portfolio website",
    icons: {
      icon: v_icon.src,
    },
  };
}

// Define layout props with async `params`
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const fontClass =
    locale === "he" ? AssistantFont.className : JetBrainsMono.className;

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      dir={locale === "he" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${fontClass} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Providers locale={locale} messages={messages}>
          <Header />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
