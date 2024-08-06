"use client";

import ProjectsForm from "@/components/projects-form";
import { UserProjectsList } from "@/lib/userprojectslist";
import { useState, useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "@/lib/functions";

export default function Dashboard() {
  const [userProjectsLocal, setUserProjectsLocal] = useState([]);

  useEffect(() => {
    if (userProjectsLocal?.length === 0) return;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userProjectsLocal));
  }, [userProjectsLocal]);

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setUserProjectsLocal(value);
  }, []);

  return (
    <>
      <div>
        <h1>Portfolio Dashboard</h1>
        <p>Submit a project to see it appear in the list below.</p>
        <p className="text-warning">
          Still working on getting submitted projects to appear on main Projects
          page.
        </p>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h2>Recent Projects</h2>
          <hr />
          <UserProjectsList projects={userProjectsLocal} />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-8 px-5">
          <h2>Add a Project</h2>
          <hr />
          <ProjectsForm
            projects={userProjectsLocal}
            setProjects={setUserProjectsLocal}
          />
        </div>
      </div>
    </>
  );
}
