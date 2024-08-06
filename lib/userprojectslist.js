"use client";

import LatestProjects from "@/components/projects/latest-projects";

export function UserProjectsList({ projects }) {
  return (
    <>
      <LatestProjects projects={projects} layout={"list"} />
    </>
  );
}
