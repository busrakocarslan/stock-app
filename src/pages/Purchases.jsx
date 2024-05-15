import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useState } from "react";
import PurchasesTable from "../component/purchase/PurchasesTable";
import PurchusesModal from "../component/purchase/PurchusesModal";
import { useSelector } from "react-redux";

const Purchases = () => {
  const { getStock } = useStockRequest();
  const { purchases,brands,firms,category,products } = useSelector((state) => state.firms);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const initialState = {
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  }
  
  const [infoPurchases, setInfoPurchases] = useState(initialState);

  const handleClose = () => {
    setOpen(false);
    setInfoPurchases(initialState)
  };

  useEffect(() => {
    getStock("purchases");
    getStock("firms")// select içide gelmez burada çağırmazsak verileri    
    getStock("brands")
    getStock("products")
    
  }, []);

  return (
    <>
      <Button variant="contained" color="info" onClick={handleOpen}>
        New PURCHASE
      </Button>
      <PurchusesModal open={open} handleClose={handleClose}  infoPurchases={infoPurchases} setInfoPurchases={setInfoPurchases} />

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        marginTop={5}
      >
        <PurchasesTable handleClose={handleClose}  infoPurchases={infoPurchases} setInfoPurchases={setInfoPurchases} handleOpen={handleOpen} />
        {/*map ile döndün başta içerideki eleman kadar tablo oluştu yukarıda useEffect ile çağırdığından dönmene gerek yok */}
      </Box>
    </>
  );
};

export default Purchases;
