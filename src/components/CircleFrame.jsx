import React from "react";
import heroPic from "../static/ryan-2024.png";
import { Avatar, Box } from "@mui/material";

export function CircleFrame() {
  return (
    <Box sx={{ minHeight: 400 }}>
      <Avatar
        alt="Ryan Cross, hello friend!"
        src={heroPic}
        sx={{
          width: 400,
          height: 400,
          margin: "auto",
          border: "5px solid lightgray",
        }}
      />
    </Box>
  );
}
