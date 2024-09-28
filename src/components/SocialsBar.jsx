import React from "react";
import { FaItchIo, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { iconSize } from "../constants/displayConstants.js";
import { Box } from "@mui/material";

export function SocialsBar() {
  return (
    // box equals div by default
    // margin left, margin right
    <Box component="nav" sx={{ minHeight: 50, mx: "auto", width: 200 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <FaItchIo color="" size={iconSize} />
        <FaLinkedin size={iconSize} />
        <FaGithub size={iconSize} />
        <FaInstagram size={iconSize} />
        <FaSquareUpwork size={iconSize} />
      </Box>
    </Box>
  );
}
