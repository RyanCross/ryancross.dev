import React from "react";
import {
  FaItchIo,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { iconSize } from "../constants/displayConstants.js";
import { Box } from "@mui/material";

export function SocialsBar() {
  return (
    // box equals div by default
    <Box component="nav">
      <FaItchIo size={iconSize} />
      <FaLinkedin size={iconSize} />
      <FaGithub size={iconSize} />
      <FaInstagram size={iconSize} />
      <FaSquareUpwork size={iconSize} />
    </Box>
  );
}
