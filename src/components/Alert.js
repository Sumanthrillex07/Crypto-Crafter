import React from "react";
import { CryptoState } from "../CryptoContext";
import { Snackbar, Alert } from "@mui/material";
const Alert1 = () => {
  const { alert, setAlert } = CryptoState();
  //   const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setAlert({ open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default Alert1;
