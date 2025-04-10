import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHubContributions from "@/components/GithubContribution";
import Head from "@/components/Head";
import Intro from "@/components/Intro";
import RecentProj from "@/components/RecentProj";
import Techstacks from "@/components/Techstacks";
import ThemeToggle from "@/components/ui/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <main className="mx-auto max-w-2xl px-4 py-2 ">
        <Head />
        <Intro />
        <Experience />
        <GitHubContributions />
        <RecentProj />
        <Techstacks />
        <Footer />
      </main>

    </div>
  );
}
