// Displays the latest (first 4) projects in either a grid view or list view depending on the layout prop

import ProjectGrid from "./projects-grid";
import ProjectsList from "./projects-list";

export default function LatestProjects({ projects, layout }) {
  const latestProjs = projects?.slice(0, 4);

  return layout === "list" ? (
    <ProjectsList projects={latestProjs} />
  ) : (
    <ProjectGrid projects={latestProjs} />
  );
}
