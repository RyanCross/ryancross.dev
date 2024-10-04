import * as React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/displayConstants";
import { Grid2, Container, Typography } from "@mui/material";

export function ProjectsSection() {
  function buildProjects() {
    return projects.map((project) => {
      return (
        <ProjectCard
          projTitle={project.title}
          projImage={project.img}
          projImageAlt="alt"
          projDesc={project.description}
          projLink={project.link}
          projLinkText={project.linkText}
        ></ProjectCard>
      );
    });
  }

  return (
    <Container>
      <Typography variant="h4">Projects</Typography>
      {buildProjects()}
    </Container>
  );
}
