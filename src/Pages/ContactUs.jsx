import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function ContactUs() {
  const mail =
    "https://mail.google.com/mail/?view=cm&fs=1&to=viratrohitmsd2001@gmail.com";
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        You Can Contact Us on{" "}
        <a href={mail} target="_blank">
          Mail Us
        </a>
        {" "}or you can whatsapp us on 9013069266
      </Container>
    </React.Fragment>
  );
}
