"use client";

import { slugify, LOCAL_STORAGE_KEY } from "@/lib/functions";
import { useState } from "react";

import classes from "./projects-form.module.css";

export default function ProjectsForm({ projects, setProjects }) {
  // States for form inputs
  const [projectTitle, setProjectTitle] = useState("");
  const [projectContent, setProjectContent] = useState("");
  const [projectImage, setProjectImage] = useState();

  // Setting and formatting date to save as an object property
  const initializedDate = new Date().toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  // Handlers to set states for form inputs
  const titleHandler = (event) => {
    setProjectTitle(event.target.value);
  };

  const contentHandler = (event) => {
    setProjectContent(event.target.value);
  };

  const imageHandler = (event) => {
    const image = event.target.files[0];

    if (!image) {
      setProjectImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setProjectImage(fileReader.result);
    };
    fileReader.readAsDataURL(image);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Create a new array and saving inputted fields into an object along with previous projects
    const newProjects = [
      {
        id: crypto.randomUUID(),
        slug: slugify(projectTitle),
        title: projectTitle,
        image: projectImage,
        published: initializedDate,
        content: projectContent,
      },
      ...projects,
    ];

    setProjects(newProjects);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProjects));

    setProjectTitle("");
    setProjectContent("");
    setProjectImage();
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes["projects-form"]}>
      <div className={classes["projectsform-inputgroup"]}>
        <label htmlFor="project-title">Project Title</label>
        <input
          type="text"
          id="project-title"
          name="project-name"
          required
          onChange={titleHandler}
          value={projectTitle}
        />
      </div>
      <div className={classes["projectsform-inputgroup"]}>
        <label htmlFor="project-content">Project Content</label>
        <textarea
          id="project-content"
          onChange={contentHandler}
          rows={10}
          value={projectContent}
        ></textarea>
      </div>

      <div className={classes["projectsform-inputgroup"]}>
        <label htmlFor="project-image">Project Image</label>
        <div>
          <input
            type="file"
            id="project-image"
            accept="image/png, image/jpeg"
            name="project-image"
            onChange={imageHandler}
            required
          />
        </div>
      </div>
      <button>Add Project</button>
    </form>
  );
}
