import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import StepperApp from "./Stepper/StepperApp";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-40%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(34 197 94)",
          color: "white",
          padding: "8px",
          width: "100%",
        }}
      >
        Apply
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StepperApp />
      </Modal>
    </div>
  );
}
