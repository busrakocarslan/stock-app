import { useSelector } from "react-redux";
import SaleModal from "../component/sale/SaleModal";
import SalesTable from "../component/sale/SalesTable";
import useStockRequest from "../services/useStockRequest";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

const Sales = () => {
  const { getStock } = useStockRequest();
  const { sales, brands, category, products } = useSelector(
    (state) => state.firms
  );
  const initialState = {
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
    amount: "",
  };

  const [infoSales, setInfoSales] = useState(initialState);
  //modal için lifting stateup
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfoSales(initialState);
  };

  useEffect(() => {
    getStock("sales");
    getStock("brands");
    getStock("products");
  }, []);

  return (
    <div>
      <Button variant="contained" color="info" onClick={handleOpen}>
        New SALE
      </Button>
      <SaleModal
        open={open}
        handleClose={handleClose}
        infoSales={infoSales}
        setInfoSales={setInfoSales}
      />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        marginTop={5}
      >
        <SalesTable
          handleOpen={handleOpen}
          infoSales={infoSales}
          setInfoSales={setInfoSales}
        />
      </Box>
    </div>
  );
};

export default Sales;
