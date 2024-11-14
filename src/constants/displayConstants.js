import syncopathImg from "../static/syncopathPromo1.gif";
import devWebsiteImg from "../static/pigJigPromotional2.png";
import godotwfcImg from "../static/godotwfc.gif";
import jamsImg from "../static/pigJigPromotional1.png";

export const iconSize = "30";

export const socialsData = {
  tooltips: {
    itch: "Games I've made",
    instagram: "I swear I'll post more than once this year.",
    linkedin: "My professional experience",
    upwork: "Hire me for freelance work",
    github: "Software and gamedev projects",
  },
  links: {
    itch: "https://ryancross.itch.io/",
    instagram: "https://www.instagram.com/podliff/",
    linkedin: "https://www.linkedin.com/in/ryan-cross-148968169/",
    upwork: "https://www.upwork.com/freelancers/~011d66fbd7546151c5",
    github: "https://github.com/RyanCross",
  },
};

export const projects = [
  {
    title: "Syncopath",
    description: "A game built to test and train your rhythm. Made in Godot 4.",
    linkText: "Play",
    link: "",
    img: syncopathImg,
  },
  {
    title: "Game Jams",
    description:
      "These are fun, often dysfunctional games I've made during limited timespan competitions. Usually 72 hrs.",
    linkText: "Play",
    link: "",
    img: jamsImg,
  },
  {
    title: "ryancross.dev",
    description:
      "See the code for this site. *Inception Noises*",
    linkText: "See Code",
    link: "",
    img: devWebsiteImg,
  },
  {
    title: "GD2D Terrain Generator",
    description:
      "GD2D is a GoDot 2D terrain generation tool for creating randomly generated tilemaps. While still in development, it can currently generate simplistic terrain from any tileset.",
    linkText: "Learn More",
    link: "",
    img: godotwfcImg,
  },
];
