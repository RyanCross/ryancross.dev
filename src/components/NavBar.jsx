import React from "react";
import { FaItchIo, FaLinkedin, FaGithub } from "react-icons/fa";
import { TextButton } from "./TextButton.jsx";
import { iconSize } from "../constants/displayConstants.js";

export function NavBar() {
  // TODO look into react router, probably wont be divs forever
  return (
    <div>
      <nav>
        <TextButton text="Ryan Cross" style={{ display: "inline" }} />

        <FaItchIo size={iconSize} />
        <FaLinkedin size={iconSize} />
        <FaGithub size={iconSize} />
      </nav>
    </div>
  );
}
