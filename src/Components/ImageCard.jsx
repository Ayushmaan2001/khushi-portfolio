import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ImageCard({images}) {
  return (
    <Card sx={{ maxWidth: 345,m:3, display:'inline-flex'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={images}
        />
      </CardActionArea>
    </Card>
  );
}
