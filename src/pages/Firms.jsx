import { useEffect, useState } from "react";
import useStockRequest from "../services/useStockRequest";
import { useDispatch, useSelector } from "react-redux";
import FirmsCard from "../component/FirmsCard";
import { Box, Button, Typography } from "@mui/material";
import Modal from "../component/Modal";
import FirmsModal from "../component/Modal";
import loadingGif from "../assets/loading.gif";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [selectedFirmId,setSelectedFirmId]=useState()// selectedFirmId, seçilen firmanın bilgilerini tutacak ,ilk değeri null olarak ayarlandı başlangıçta herhangi bir firma seçilmemesi için
  const handleClose = () => {
    setOpen(false)
    setSelectedFirmId(null)// add butonuna firmi seçtikten sonra tıkladığımda bilgileri silmesi için 

  }
 
console.log(selectedFirmId);
  const { getStock, stockData } = useStockRequest();
  // const dispatch = useDispatch();
  const { firms, loading, error } = useSelector((state) => state.firms);

  useEffect(() => {
    getStock("firms"); // tek bir fonk parametreli yazdığımızdan çağırıken içerisine parametre koymamız gerek.
    // getStock("sales")

    // getFirms();
    // getSales() // bu fonk bize api dan firma bil getirecek. Başka yerde de lazım olacağından gelen verileri global state de tutmak lazım.
  }, []);

  return (
    <Box>
      <Typography variant="h3" color="primary.main" mb={2}>
        Firms
      </Typography>
      <Button color="secondary" variant="contained" onClick={handleOpen}>
        ADD fİRMS
      </Button>
      <FirmsModal handleClose={handleClose} open={open} selectedFirmId={selectedFirmId} />
      {loading && <img src={loadingGif} alt="Loading" />}

      {/* {error && <Typography variant="body1">Hay aksi, bir hata oluştu!</Typography>} */}

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        {firms?.map((firm) => (
          <FirmsCard
            key={firm._id}
            firm={firm}
           
            setSelectedFirmId={setSelectedFirmId}            
            handleOpen={handleOpen}
          ></FirmsCard>
        ))}
      </Box>
    </Box>
  );
};

export default Firms;
// tekrar tekrar api isteği atmak yerine parametre alan bir fonk yazmalıyız.
