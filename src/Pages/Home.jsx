import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Container, Paper } from "@mui/material";
import ImageCard from "../Components/ImageCard";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    idx: "0",
    imgPath: require("../Images/069A46671643469002486.jpg"),
  },
  {
    idx: "1",
    imgPath: require("../Images/069A46761643469002487.jpg"),
  },
  {
    idx: "2",
    imgPath: require("../Images/069A46781643469002487.jpg"),
  },
  {
    idx: "3",
    imgPath: require("../Images/069A46871643469002488.jpg"),
  },
  {
    idx: "4",
    imgPath: require("../Images/069A48931643469002518.jpg"),
  },
  {
    idx: "5",
    imgPath: require("../Images/069A49301643469002523.jpg"),
  },
  {
    idx: "5",
    imgPath: require("../Images/069A50471643469002547.jpg"),
  },
  {
    idx: "6",
    imgPath: require("../Images/069A50471643469002547.jpg"),
  },
];

export default function Home() {
  const Navigate = useNavigate();
  const commercialmakeup = () => {
    Navigate("/commercialshoots");
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ maxWidth: 1000, display: "flex", m: "auto" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.idx}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 650,
                      display: "block",
                      overflow: "hidden",
                    }}
                    src={step.imgPath}
                    alt={step.idx}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Container>
    </React.Fragment>
  );
}
