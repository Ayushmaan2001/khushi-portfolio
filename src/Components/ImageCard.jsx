import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImageCard({ images }) {
  return (
    <Card sx={{ maxWidth: 345, ml: 2, mb: 2, mt: 2, display: "inline-flex" }}>
      <CardMedia component="img" height="400" image={images} />
    </Card>
  );
}
