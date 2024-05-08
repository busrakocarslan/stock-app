import { useEffect } from "react";
import useStockRequest from "../services/useStockRequest";
import { useDispatch, useSelector } from "react-redux";
import FirmsCard from "../component/FirmsCard";
import { Box } from "@mui/material";
import Modal from "../component/Modal";
import FirmsModal from "../component/Modal";
// import { firmPending } from "../features/firmSlice"

const Firms = () => {

  const { getFirms } = useStockRequest();
  const dispatch = useDispatch();
  const { firmsData, loading, error } = useSelector((state) => state.firms);

  useEffect(() => {
    getFirms(); // bu fonk bize api dan firma bil getirecek. Başka yerde de lazım olacağından gelen verileri global state de tutmak lazım.
  }, []);

  return (
    <Box>
      <h2>Firms</h2>
      <FirmsModal/>

      <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        {firmsData?.map((firm) => (
          <FirmsCard key={firm._id} {...firm}></FirmsCard>
        ))}
      </Box>
    </Box>
  );
};

export default Firms;
// tekrar tekrar api isteği atmak yerine parametre alan bir fonk yazmalıyız.
