import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MenuItem, Select, TextField } from "@mui/material";

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

const PurchusesModal = ({ open, handleClose }) => {
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          display="flex"
          flexDirection="column"
          gap="1rem"
          component={"form"}
          //   onSubmit={handleSubmit}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="age"
            label="age"
            // onChange={handleChange}
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="age"
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="age"
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={"10"}>Ten</MenuItem>
            <MenuItem value={"20"}>Twenty</MenuItem>
            <MenuItem value={"30"}>Thirty</MenuItem>
          </Select>

          <TextField
            label="Brand Name*"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            // value={infoBrand.name}
            // onChange={handleBrand}
          />

          <TextField
            id="image"
            label="Image URL*"
            variant="outlined"
            type="url"
            name="image"
            // value={infoBrand.image}
            // onChange={handleBrand}
          />
          <Button type="submit" color="error" variant="contained">
            add product
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default PurchusesModal;
