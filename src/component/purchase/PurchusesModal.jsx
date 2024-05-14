import React from "react";
import { useEffect, useState } from "react";
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
import useStockRequest from "../../services/useStockRequest";

const PurchusesModal = ({
  open,
  handleClose,
  infoPurchases,
  setInfoPurchases,
}) => {
  const { products, brands, quantity, firms, purchases } = useSelector(
    (state) => state.firms
  );
  const { createStock, putStock } = useStockRequest();
  const handleChange = (e) => {
    setInfoPurchases({ ...infoPurchases, [e.target.name]: e.target.value });
    console.log(infoPurchases);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (infoPurchases._id) {
      putStock("purchases", infoPurchases._id, infoPurchases);
    } else {
      createStock("purchases", infoPurchases);
    }
    handleClose();
  };

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
          onSubmit={handleSubmit}
        >
          <FormControl fullWidth>
            <InputLabel id="firmId">Firms</InputLabel>
            <Select
              defaultValue=""
              labelId="firmid"
              id="firmId"
              name="firmId"
              value={infoPurchases.firmId? infoPurchases.firmId : infoPurchases.brandId.name }
              label="Firm"
              onChange={handleChange}
            >
              {firms.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="firmId">Brands</InputLabel>
            <Select
              defaultValue=""
              labelId="brandId"
              id="brandId"
              name="brandId"
              value={infoPurchases?.brandId?.name}
              label="Brand"
              onChange={handleChange}
            >
              {brands.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem> // be bizden id istediği için value da id veriyoruz.
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="categoryId">Product</InputLabel>

            <Select
              defaultValue=""
              labelId="productId"
              id="productId"
              name="productId"
              value={infoPurchases?.productId?.name}
              label="stock*"
              onChange={handleChange}
            >
              {products.map((item) => (
                <MenuItem key={item._id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="stock*"
            name="quantity"
            id="quantity"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 0 } }}
            value={infoPurchases?.quantity || ""}
            onChange={handleChange}
          />
          <TextField
            label="Price*"
            name="price"
            id="price"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 0 } }}
            value={infoPurchases?.price || ""}
            onChange={handleChange}
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
