import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

// everything in card action area a single event
export default function ProjectCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.projImageAlt}
          height="180"
          src={props.projImage}
        />
        {/* height enforces a consistent card size, if it looks wonky, description is too long */}
        <CardContent sx={{height: 125}}> 
          <Typography gutterBottom variant="h5" component="div">
            {props.projTitle}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.projDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" href={props.projLink} sx={{
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'common.white',
        },
      }}>{props.projLinkText}</Button>
      </CardActions>
    </Card>
  );
}
