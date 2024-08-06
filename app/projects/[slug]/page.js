import { DUMMY_PROJECTS } from "@/dummy-projects";

import Link from "next/link";

export default function ProjectPost({ params }) {
  const projectSlug = params.slug;
  const projItem = DUMMY_PROJECTS.find(
    (projItem) => projItem.slug === projectSlug
  );

  return (
    <article>
      <header className="mb-3">
        <Link href="/projects">&laquo; Back to Projects</Link>
      </header>
      <div>
        <h1>{projItem.title}</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">{projItem.content}</div>

          <div className="col-sm-12 col-md-6">
            <img
              className="w-100"
              src={`${projItem.image}`}
              alt={projItem.title}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
