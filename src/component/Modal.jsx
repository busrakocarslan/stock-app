import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFirm } from "../features/firmSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #6D1B7B",  
  boxShadow: 24,
  p: 4,
  
 
};

const FirmsModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch()
  const handleAddFirm=()=>{
    // dispatch(addFirm())
    handleClose()

  }

  return (
    <Box>
      <Button color="secondary" variant="contained" onClick={handleOpen}>Add Firm</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} display="flex"flexDirection="column" gap="1rem"    >
          <TextField id="outlined-basic" label="Firm Name*"
          type="text" 
          variant="outlined" />
          <TextField id="outlined-basic" 
          type="phone"
          label="Phone*" variant="outlined" />
          <TextField id="outlined-basic" 
          type="text"
          label="Address*" variant="outlined" />
          <TextField id="outlined-basic" label="Image*"          
          variant="outlined" />
          <Button onClick={handleAddFirm}  color="info" variant="contained">ADD FIRM</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default FirmsModal;
