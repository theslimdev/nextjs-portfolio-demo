// Displays grid of tiles

import ProjectTile from "./project-tile";

export default function ProjectGrid({ projects }) {
  return (
    <>
      <div className="row">
        <ProjectTile projects={projects} />
      </div>
    </>
  );
}
