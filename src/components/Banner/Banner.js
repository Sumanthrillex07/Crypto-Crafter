import React from "react";
import "./Banner.css";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Banner = () => {
  return (
    <div className="banner">
      <Container
        className="bannerContent"
        style={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          paddingTop: 25,
          justifyContent: "space-around",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="tagline"
          style={{
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Fredoka",
              fontSize: "7 rem",
            }}
          >
            Crypto{" "}
            <i
              class="fa-brands  fa-beat-fade fa-gg fa-lg"
              style={{ marginRight: "2px" }}
            >
              {" "}
            </i>{" "}
            Crafter
          </Typography>
          <Typography
            variant="subtitle"
            style={{
              marginBottom: 15,
              fontFamily: "Fredoka",
              textTransform: "capitalize",
              color: "var(--sub_head)",
              fontSize: "1.5 rem",
              fontWeight: "bold",
            }}
          >
            The power of crypto, at your fingertips.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
