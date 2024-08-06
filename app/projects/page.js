import ProjectGrid from "@/components/projects/projects-grid";
import { DUMMY_PROJECTS } from "@/dummy-projects";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects Page</h1>
      <ProjectGrid projects={DUMMY_PROJECTS} />
    </>
  );
}
