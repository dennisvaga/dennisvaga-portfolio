"use client";

import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/useDirection";
import { SectionContainer } from "@/layouts/SectionContainer";
import InterestItem from "./InterestItem";
import { getInterests } from "./interestsData";

export default function AboutMe() {
  const t = useTranslations("AboutMe");
  const { textAlign } = useDirection();

  // Get interests data
  const interests = getInterests();

  return (
    <div id="about-me" className={`bg-[var(--about-bg)]`}>
      <SectionContainer
        className={`relative z-10 px-6 ${textAlign.responsive}`}
      >
        <div className="flex flex-col md:flex-row items-start gap-14">
          <div className="md:w-3/5 w-full space-y-8">
            <h2 className={`text-4xl font-bold`}>{t("title")}</h2>
            <div className={`space-y-6 text-lg text-muted-foreground`}>
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
              <p>{t("paragraph4")}</p>
            </div>
          </div>

          <div
            className={`flex flex-col items-center md:items-start md:w-2/4 w-full bg-card/50 rounded-xl p-6 dark:shadow-2xl shadow-sm border border-border/40 space-y-7 ${textAlign.responsive}`}
          >
            <h3 className="text-2xl font-semibold">{t("interests")}</h3>
            <div className="grid grid-cols-1 gap-5">
              {interests.map((interest, index) => (
                <InterestItem
                  key={index}
                  icon={interest.icon}
                  label={t(interest.translationKey)}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
