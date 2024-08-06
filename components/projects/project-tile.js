// Individual tile layout
// Meant to be used with Projects Grid

import Link from "next/link";
import classes from "./project-tile.module.css";

export default function ProjectTile({ projects, layout }) {
  return (
    <>
      {projects &&
        projects.map((project) => (
          <div
            className={layout ? "" : "col-12 col-md-4 col-lg-3 mb-5"}
            key={project.id}
          >
            <div className={classes["img-container"]}>
              <Link href={`/projects/${project.slug}`}>
                <img src={project.image} alt={project.title} />
              </Link>
            </div>

            <div className={classes["content-container"]}>
              <h2>{project.title}</h2>
              <p>{project.content}</p>
              <Link
                href={`/projects/${project.slug}`}
                className={classes["project-link"]}
              >
                View project page
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
