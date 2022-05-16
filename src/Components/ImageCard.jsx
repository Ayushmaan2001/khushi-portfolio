import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function ImageCard({ images }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        ml: 1.3,
        mt: 1,
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
