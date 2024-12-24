import * as React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/displayConstants";
import { Grid2, Container, Typography } from "@mui/material";

export function ProjectsSection() {
  function buildProjects() {
    return projects.map((project) => {
      return (
        <Grid2 size={{xs: 12, sm: 4}}>
          <ProjectCard 
            projTitle={project.title}
            projImage={project.img}
            projImageAlt="alt"
            projDesc={project.description}
            projLink={project.link}
            projLinkText={project.linkText}
          ></ProjectCard>
        </Grid2>
      );
    });
  }

  return (
    <Container sx={{}} component="section" display="flex" justifyContent="center">
      <Typography sx={{mb: 2, textDecoration: "underline"}} variant="h4" textAlign="center" >Projects</Typography>
      <Grid2 container gap={2} justifyContent="center">
        {buildProjects()}
      </Grid2>
    </Container>
  );
}
