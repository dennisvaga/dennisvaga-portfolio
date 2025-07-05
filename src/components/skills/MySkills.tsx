"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useDirection } from "@/hooks/useDirection";
import { SectionContainer } from "@/layouts/SectionContainer";
import { useMediaQuery } from "@/hooks/use-media-query";
import SkillItem from "./SkillItem";
import CategoryHeader from "./CategoryHeader";
import { frontendSkills, backendSkills, toolsSkills } from "./skillsData";

// Main MySkills component
const MySkills = () => {
  const t = useTranslations("MySkills");
  const { textAlign } = useDirection();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openMobileTooltip, setOpenMobileTooltip] = React.useState<
    string | null
  >(null);

  const handleTooltipToggle = (skillName: string | null) => {
    setOpenMobileTooltip(skillName);
  };

  return (
    <div
      id="skills"
      className={`my-skills pb-20 bg-gradient-to-br from-[var(--skills-bg-from)] via-[var(--skills-bg-midpoint)] to-[var(--skills-bg-to)] text-[var(--skills-text)] ${textAlign.responsive}`}
    >
      <SectionContainer className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">{t("title")}</h2>
          <p className="text-[var(--skills-text-muted)] text-lg max-w-[600px]">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Column */}
          <div>
            <CategoryHeader title={t("categories.frontend")} />
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  isOpen={
                    isMobile ? openMobileTooltip === skill.name : undefined
                  }
                  onToggle={handleTooltipToggle}
                />
              ))}
            </div>
          </div>

          {/* Backend Column */}
          <div>
            <CategoryHeader title={t("categories.backend")} />
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  isOpen={
                    isMobile ? openMobileTooltip === skill.name : undefined
                  }
                  onToggle={handleTooltipToggle}
                />
              ))}
            </div>
          </div>

          {/* Tools & Utilities Column */}
          <div>
            <CategoryHeader title={t("categories.tools")} />
            <div className="grid grid-cols-2 gap-4">
              {toolsSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  isOpen={
                    isMobile ? openMobileTooltip === skill.name : undefined
                  }
                  onToggle={handleTooltipToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default MySkills;
