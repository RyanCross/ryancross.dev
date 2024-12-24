import React from "react";
import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{m: 5}}component="section">
      <Box textAlign="center"><Typography>© Ryan Cross 2024-2025. All rights reserved.</Typography></Box>
      <Box textAlign="center"><Typography>Built with React and Material UI</Typography></Box>
    </Box>
  );
}
