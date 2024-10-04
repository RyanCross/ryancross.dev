import React from "react";
import { FaItchIo, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { iconSize } from "../constants/displayConstants.js";
import { Box, Button } from "@mui/material";

export function SocialsBar() {
  return (
    // box equals div by default
    // margin left, margin right
    <Box component="nav" sx={{ minHeight: 50, mx: "auto", width: 400 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button>
          <FaItchIo size={iconSize} />
        </Button>
        <Button>
          <FaLinkedin size={iconSize} />
        </Button>
        <Button>
          <FaGithub size={iconSize} />
        </Button>
        <Button>
          <FaInstagram size={iconSize} />
        </Button>
        <Button>
          <FaSquareUpwork size={iconSize} />
        </Button>
      </Box>
    </Box>
  );
}
