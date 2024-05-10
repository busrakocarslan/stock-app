import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useDispatch, useSelector } from "react-redux";
import FirmsCard from "../component/FirmsCard";
import { Box, Typography } from "@mui/material";
import Modal from "../component/Modal";
import FirmsModal from "../component/Modal";
import loading from "../assets/loading.gif"
// import { firmPending } from "../features/firmSlice"

const Firms = () => {

  const {getStock,stockData} = useStockRequest();
  // const dispatch = useDispatch();
  const { firms, loading, error } = useSelector((state) => state.firms);

  useEffect(() => {
    getStock("firms")// tek bir fonk parametreli yazdığımızdan çağırıken içerisine parametre koymamız gerek.
    getStock("sales")

    // getFirms();
    // getSales() // bu fonk bize api dan firma bil getirecek. Başka yerde de lazım olacağından gelen verileri global state de tutmak lazım.
  }, []);

  return (
    <Box>
      <h2>Firms</h2>
      <FirmsModal/>
      {loading && <img src={loading} alt="Loading" />} 
    
      {error && <Typography variant="body1">Hay aksi, bir hata oluştu!</Typography>}

      <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        {firms?.map((firm) => (
          <FirmsCard key={firm._id} {...firm}></FirmsCard>
        ))}
      </Box>
    </Box>
  );
};

export default Firms;
// tekrar tekrar api isteği atmak yerine parametre alan bir fonk yazmalıyız.
