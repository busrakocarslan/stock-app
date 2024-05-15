import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import React from 'react'
import { modalstyle } from "../../styles/globalStyles";
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const SaleModal = ({open,handleClose,infoSales}) => {
    const navigate = useNavigate()
  const { products, brands, firms} = useSelector(
    (state) => state.firms
  );
    const handleChange = (e) => {}
    //     setInfoPurchases({
    //       ...infoPurchases,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
      
    
      const handleSubmit = (e) => {
        // e.preventDefault();
        // if (infoPurchases._id) {
        //   putStock("purchases",infoPurchases._id,infoPurchases);
        // } else {
        //   createStock("purchases", infoPurchases);
        // }
        // handleClose();
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
      
        <FormControl>
          <InputLabel variant="outlined" id="brand-select-label">Brands</InputLabel>
          <Select
           
            labelId="brand-select-label"
            id="brand-select"
            name="brandId"
            value={infoSales?.brandId?._id || infoSales?.brandId }
            label="Brand"
            onChange={handleChange}
            required
          >
            <MenuItem onClick={() => navigate("/stock/brands")}>
                Add New Brand
              </MenuItem>
              <hr />
              {brands?.map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                )
              })}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel variant="outlined" id="product-select-label">Product</InputLabel>

          <Select
           
            labelId="product-select-label"
            id="product-select"
            name="productId"
            value={infoSales?.productId?._id || infoSales?.productId  }
            label="Product"
            onChange={handleChange}
            required
          >
          
              <MenuItem onClick={() => navigate("/stock/products")}>
                Add New Product
              </MenuItem>
              <hr />
              {products?.map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                )
              })}
          </Select>
        </FormControl>
        <TextField
          label="Quantity"
          name="quantity"
          id="quantity"
          type="number"
          variant="outlined"
          InputProps={{ inputProps: { min: 0 } }}
          value={infoSales?.quantity}
          onChange={handleChange}
          required
        />
        <TextField
          label="Price"
          name="price"
          id="price"
          type="number"
          variant="outlined"
          InputProps={{ inputProps: { min: 0 } }}
          value={infoSales?.price}
          onChange={handleChange}
          required
        />

        <Button type="submit" color="error" variant="contained">
        {infoSales._id ? "Update" : "Add"} Sales
        </Button>
      </Box>
    </Modal>
  </Box>
  )
}

export default SaleModal