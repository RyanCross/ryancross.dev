import React from "react";
import { FaItchIo, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { iconSize } from "../constants/displayConstants.js";
import { Box, Button } from "@mui/material";
import { socialsData } from "../constants/displayConstants.js";

export function SocialsBar() {
  return (
    // box equals div by default
    // margin left, margin right
    <Box component="nav" sx={{ minHeight: 50, mx: "auto", width: 400 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button href={socialsData.links.itch} target="_blank">
          <FaItchIo size={iconSize} />
        </Button>
        <Button href={socialsData.links.linkedin} target="_blank">
          <FaLinkedin size={iconSize} />
        </Button>
        <Button href={socialsData.links.github} target="_blank">
          <FaGithub size={iconSize} />
        </Button>
        <Button href={socialsData.links.instagram} target="_blank">
          <FaInstagram size={iconSize} />
        </Button>
        <Button href={socialsData.links.upwork} target="_blank">
          <FaSquareUpwork size={iconSize} />
        </Button>
      </Box>
    </Box>
  );
}
