import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { modalstyle } from "../../styles/globalStyles";
import { useSelector } from "react-redux";

const ProductModal = ({ open, handleClose, infoProduct }) => {
  const { categories,brands } = useSelector((state) => state.firms);
  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={modalstyle}
          display="flex"
          flexDirection="column"
          gap="1rem"
          component={"form"}
          //   onSubmit={handleSubmit}
        >
          <FormControl fullWidth>
            <InputLabel id="categoryId">Categories</InputLabel>
            <Select
              labelId="categoryId"
              id="categoryId"
              name="categoryId"
              value={infoProduct.categoryId}
              label="Categories"
              // onChange={handleChange}
            >
              {categories.map((item) => (
                <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>// be bizden id istediği için value da id veriyoruz.
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="brandId">Brands</InputLabel>
            <Select
              labelId="categoryId"
              id="categoryId"
              name="categoryId"
              value={infoProduct.brandId}
              label="Categories"
              // onChange={handleChange}
            >
              {brands.map((item) => (
                <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>// be bizden id istediği için value da id veriyoruz.
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Brand Name*"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            // value={infoBrand.name}
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

export default ProductModal;

