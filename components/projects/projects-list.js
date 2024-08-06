// Displays a vertical list of projects in an unordered list

import classes from "./projects-list.module.css";

export default function ProjectsList({ projects }) {
  return (
    <>
      <ul className={classes["projects-list"]}>
        {projects &&
          projects.map((project) => {
            return (
              <li
                key={project.id}
                style={{
                  background: `url(${project.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className={classes["content-container"]}>
                  <h2>{project.title}</h2>
                  <p>{project.content}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
