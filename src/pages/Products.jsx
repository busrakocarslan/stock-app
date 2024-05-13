import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import ProductTable from "../component/product/ProductTable";
import { useSelector } from "react-redux";
import ProductModal from "../component/product/ProductModal";
import { useState } from "react";

const Products = () => {
  const { getStock, stockData } = useStockRequest();
  const { products,categories,brands } = useSelector((state) => state.firms);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const initialState = { categoryId: "", brandId: "", name: "" };
  const [infoProduct, setInfoProduct] = useState(initialState);
  const handleClose = () => {
    setOpen(false);
    setInfoProduct(initialState)
    
  };

  useEffect(() => {
    getStock("products");
    getStock("categories");// modaldaki alan için 
    getStock("brands");// modaldaki alan için
  }, []);
  return (
    <>
      <Typography variant="h3" color="info.light" mb={2}>
        Products
      </Typography>
      <Button variant="contained" color="info" onClick={handleOpen}>
        New Product
      </Button>
      <ProductModal open={open} handleClose={handleClose} infoProduct={infoProduct} setInfoProduct={setInfoProduct} />

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        marginTop={5}
      >
        <ProductTable />
        {/*map ile döndün başta içerideki eleman kadar tablo oluştu yukarıda useEffect ile çağırdığından dönmene gerek yok */}
      </Box>
    </>
  );
};

export default Products;
