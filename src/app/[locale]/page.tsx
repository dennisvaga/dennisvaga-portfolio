import HeroSection from "@/components/hero/HeroSection";
import AboutMe from "@/components/about/AboutMe";
import MySkills from "@/components/skills/MySkills";
import { PageWrapper } from "@/layouts/PageWrapper";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <HeroSection />
        <AboutMe />
        <MySkills />
      </PageWrapper>
    </main>
  );
}
