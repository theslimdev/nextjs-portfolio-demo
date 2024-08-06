import { DUMMY_PROJECTS } from "@/dummy-projects";
import LatestProjects from "@/components/projects/latest-projects";

export default function Home() {
  return (
    <main>
      <h1>Portfolio Front Page</h1>
      <h2>Recent Projects</h2>
      <LatestProjects projects={DUMMY_PROJECTS} layout={"grid"} />
    </main>
  );
}
