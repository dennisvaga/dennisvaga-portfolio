import {
  ProjectDetail,
  ProjectDetailData,
} from "@/components/projects/detail/ProjectDetail";
import { ProjectApplications } from "@/components/projects/detail/ProjectComponents";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function BodyFuelProjectPage() {
  const t = useTranslations("ProjectPages.bodyfuel");
  const tApplications = useTranslations("ProjectPages.bodyfuel.applications");

  const projectData: ProjectDetailData = {
    id: "bodyfuel",
    title: t("title"),
    subtitle: t("subtitle"),
    description: t("description"),
    longDescription: t("longDescription"),
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
      "ShadCN UI",
      "TanStack Query",
      "Auth.js",
      "Vercel AI SDK",
      "AWS S3",
      "Turborepo",
    ],
    features: [
      t("features.0"),
      t("features.1"),
      t("features.2"),
      t("features.3"),
      t("features.4"),
      t("features.5"),
      t("features.6"),
      t("features.7"),
      t("features.8"),
    ],
    applications: [
      {
        name: tApplications("shop.name"),
        description: tApplications("shop.description"),
        liveUrl: "https://shop.bodyfuel.dennisvaga.com/",
        image: "/projects/bodyfuel/bodyfuel-shop.png",
      },
      {
        name: tApplications("admin.name"),
        description: tApplications("admin.description"),
        liveUrl: "https://admin.bodyfuel.dennisvaga.com/",
        image: "/projects/bodyfuel/bodyfuel-admin.png",
      },
      {
        name: tApplications("backend.name"),
        description: tApplications("backend.description"),
        image: "/projects/bodyfuel/bodyfuel-backend.png",
      },
    ],
    images: [
      "/projects/bodyfuel/bodyfuel-shop.png",
      "/projects/bodyfuel/bodyfuel-admin.png",
      "/projects/bodyfuel/bodyfuel-backend.png",
    ],
    githubUrl: "https://github.com/dennisvaga/bodyfuel",
    demoCredentials: {
      email: "admin@example.com",
      password: "Admin12345!",
    },
  };

  return (
    <ProjectDetail project={projectData}>
      {/* Project Applications Section */}
      <ProjectApplications applications={projectData.applications || []} />

      <Separator />

      {/* Project Gallery */}
      {/* <ProjectGallery
        images={projectData.images}
        projectTitle={projectData.title}
      /> */}
    </ProjectDetail>
  );
}
