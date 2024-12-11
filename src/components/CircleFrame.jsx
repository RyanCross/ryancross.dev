import React from "react";
import heroPic from "../static/ryan-2024.png";
import { Avatar, Box } from "@mui/material";
import { theme } from "../constants/theme";

export function CircleFrame() {
  return (
    <Box sx={{ margin: 2 }}>
      <Avatar
        alt="Ryan Cross, hello friend!"
        src={heroPic}
        sx={{
          width: 300,
          height: 300,
          margin: "auto",
          border: "4px solid",
          borderColor: theme.palette.primary.main,
        }}
      />
    </Box>
  );
}
