import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";
import AuthModal from "./Authentication/AuthModal";
import { CryptoState } from "../CryptoContext";
import UserSidebar from "./Authentication/UserSidebar";
const Header = () => {
  const history = useNavigate();
  const { user } = CryptoState();
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            onClick={() => history("/")}
            className="title"
            fontFamily={"Fredoka"}
            fontWeight={"bolder"}
            flex={"1"}
            variant="h5"
          >
            Crypto <i class="fa-brands fa-gg "></i> Crafter
          </Typography>
          <p className="darkmode">
            {" "}
            <DarkMode />
          </p>
          {user ? <UserSidebar /> : <AuthModal />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
