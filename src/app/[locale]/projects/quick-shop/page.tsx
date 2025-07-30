import {
  ProjectDetail,
  ProjectDetailData,
} from "@/components/projects/detail/ProjectDetail";
import { ProjectGallery } from "@/components/projects/detail/ProjectGallery";
import { useTranslations } from "next-intl";

export default function QuickShopProjectPage() {
  const t = useTranslations("ProjectPages.quickShop");

  const projectData: ProjectDetailData = {
    id: "quick-shop",
    title: t("title"),
    subtitle: t("subtitle"),
    description: t("description"),
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "TanStack Query",
      "Expo Router",
      "Zod",
      "Lucide React Native",
    ],
    features: [
      t("features.0"),
      t("features.1"),
      t("features.2"),
      t("features.3"),
      t("features.4"),
      t("features.5"),
    ],
    images: [
      "/projects/quick-shop/main.png",
      "/projects/quick-shop/categories.png",
      "/projects/quick-shop/single-product.png",
      "/projects/quick-shop/single-product-bottom.png",
    ],
    githubUrl: "https://github.com/dennisvaga/quick-shop",
  };

  return (
    <ProjectDetail project={projectData}>
      {/* Project Gallery */}
      <ProjectGallery
        images={projectData.images}
        projectTitle={projectData.title}
      />
    </ProjectDetail>
  );
}
