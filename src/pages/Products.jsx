import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import ProductTable from "../component/product/ProductTable";
import { useSelector } from "react-redux";
import ProductModal from "../component/product/ProductModal";
import { useState } from "react";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";
import TableSkeleton, { ErrorMessage, NoDataMessage } from "../component/DataFetchMessages";


const Products = () => {
  const { getStock, stockData, patchStock } = useStockRequest();
  const { products,error,loading } = useSelector((state) => state.firms);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const initialState = {id:"", categoryId: "", brandId: "", name: "", stock: "" };
  const [infoProduct, setInfoProduct] = useState(initialState);
  // const handleStock = async () => {
  //   console.log("handlestock çalıştı");
  //   const newQuantitiy = infoProduct._id; // asenkron olduğu için değere atadım
  //   console.log(newQuantitiy);
  //   const updateQuantity = setInfoProduct({
  //     ...infoProduct,
  //     quantity: newQuantitiy,
  //   });
  //   console.log(updateQuantity);

  //   const deneme=patchStock("products", infoProduct._id, updateQuantity);
  //   console.log(deneme);
  //   console.log(infoProduct._id);
  // };
  const handleClose = () => {
    setOpen(false);
    setInfoProduct(initialState);
  };

  useEffect(() => {
    getStock("products");
    getStock("categories"); // modaldaki alan için
    getStock("brands"); // modaldaki alan için
  }, []);
  return (
    <>
      <Typography variant="h3" color="info.light" mb={2}>
        Products
      </Typography>
      <Button variant="contained" color="info" onClick={handleOpen} sx={{marginBottom:5}} >
        New Product
      </Button>

      {error && !loading && <ErrorMessage />}
      {loading && products.length > 0 && <TableSkeleton />}
      {!loading && !products.length && <NoDataMessage />}
      {!error && !loading && products.length > 0 && <ProductTable  />}




      <ProductModal
        open={open}
        handleClose={handleClose}
        infoProduct={infoProduct}
        setInfoProduct={setInfoProduct}
        // handleStock={handleStock}
      />

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        marginTop={5}
      >
       
        {/* //handleStock={handleStock} */}
        {/*map ile döndün başta içerideki eleman kadar tablo oluştu yukarıda useEffect ile çağırdığından dönmene gerek yok */}
      </Box>
    </>
  );
};

export default Products;
