import * as React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../constants/displayConstants";
import { Grid2, Container, Typography } from "@mui/material";

export function ProjectsSection() {
  function buildProjects() {
    return projects.map((project) => {
      return (
        <ProjectsCard
          projTitle={project.title}
          projImage={project.img}
          projImageAlt="alt"
          projDesc={project.description}
          projLink={project.link}
          projLinkText={project.linkText}
        ></ProjectsCard>
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
