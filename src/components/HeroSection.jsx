import React from "react";
import { CircleFrame } from "./CircleFrame";
import { SocialsBar } from "./SocialsBar";
import { Box, Fab, Typography } from "@mui/material";
import { FaDownload } from "react-icons/fa6";
import resume from '../static/RyanCross-Resume.pdf';

export function HeroSection() {
  //TODO add a strikethrough on cross
  return (
    <div>
      <Box component="section">
        <CircleFrame></CircleFrame>
        <Typography color="textPrimary" variant="h3">
          Ryan Cross
        </Typography>
        <SocialsBar></SocialsBar>
        <Fab href={resume} download="RyanCrossResume.pdf" variant="extended" color="primary">
          <Box sx={{ mr: 1 }}>
            <FaDownload />
          </Box>
          <Box>Get My Resume</Box>
        </Fab>

        <Typography variant="subtitle1">Business Inquiries</Typography>
        <Typography variant="h5">ryan@cinuous.com</Typography>
      </Box>
    </div>
  );
}
