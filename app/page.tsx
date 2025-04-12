import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHubContributions from "@/components/GithubContribution";
import Head from "@/components/Headnav";
import Intro from "@/components/Intro";
import RecentProj from "@/components/RecentProj";
import Techstacks from "@/components/Techstacks";
export default function Home() {
  return (
    <div>

      <main className="mx-auto max-w-2xl px-4 pt-20 ">

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
