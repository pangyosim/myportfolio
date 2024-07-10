import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

const CustomModal = ({ open, closeModal, children }) => {
  return (
    <Modal open={open} onClose={closeModal}>
        <Paper
        elevation={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          maxWidth: "100%",
          maxHeight: "100%",
          overflowY: "auto",
          padding:"1rem",
          borderRadius: "20px",
        }}
      >
        {children}
      </Paper>
    </Modal>
  );
}

export default CustomModal;