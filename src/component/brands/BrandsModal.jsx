import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
// import { useDispatch } from "react-redux";
import useStockRequest from "../../services/useStockRequest";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #972E0E",
  boxShadow: 24,
  p: 4,
};

const BrandsModal = ({open,handleClose,infoBrand,setInfoBrand}) => {

  const { createStock, putStock } = useStockRequest();
 
//   console.log(infoBrand);
  const handleBrand=(e)=>{
   setInfoBrand({...infoBrand,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    createStock("brands",infoBrand)
    setInfoBrand({name:"",image:""})
    handleClose()

  }



  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display="flex" component={"form"}  onSubmit={handleSubmit} flexDirection="column" gap="1rem">
          <TextField
            id="outlined-basic"
            label="Brand Name*"
            name="name"
            type="text"
            variant="outlined"
            onChange={handleBrand}
          />

          <TextField
            id="outlined-basic"
            label="Image URL*"
            variant="outlined"
            type="url"
            name="image"
            onChange={handleBrand}
          />
          <Button type="submit" color="error" variant="contained">
            add Brands
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default BrandsModal;
