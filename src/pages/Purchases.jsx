import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import ProductTable from "../component/product/ProductTable";
import { useSelector } from "react-redux";
import ProductModal from "../component/product/ProductModal";
import { useState } from "react";
import PurchasesTable from "../component/purchase/PurchasesTable";

const Purchases = () => {
  const { getStock, stockData } = useStockRequest();
  const { purchases } = useSelector((state) => state.firms);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // setInfoBrand({name:"",image:""})
  };

  useEffect(() => {
    getStock(" purchases");
    
  }, []);

  return (
    <>
      <Button variant="contained" color="info" onClick={handleOpen}>
        New PURCHASE
      </Button>
      {/* <ProductModal open={open} handleClose={handleClose} /> */}

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        marginTop={5}
      >
        <PurchasesTable />
        {/*map ile döndün başta içerideki eleman kadar tablo oluştu yukarıda useEffect ile çağırdığından dönmene gerek yok */}
      </Box>
    </>
  );
};

export default Purchases;
