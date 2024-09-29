import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectsCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.projImageAlt}
        height="180"
        src={props.projImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.projTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.projDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.projLink1}</Button>
      </CardActions>
    </Card>
  );
}
