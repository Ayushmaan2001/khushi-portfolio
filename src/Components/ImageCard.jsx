import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImageCard({ images }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mr: 1,
        ml: 1,
        mb: 2,
        mt: 2,
        display: {
          xl: "inline-block",
          lg: "inline-block",
          md: "inline-block",
          sm: "inline-block",
          xs: "block",
        },
      }}
    >
      <CardMedia component="img" height="400" image={images} />
    </Card>
  );
}
