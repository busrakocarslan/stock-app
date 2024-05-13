import React, { useEffect, useState } from 'react'
import useStockRequest from '../services/useStockRequest';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import loadingGif from "../assets/loading.gif";
import BrandsCard from '../component/brands/BrandsCard';
import BrandsModal from '../component/brands/BrandsModal';

const Brands = () => {
  const { getStock, stockData } = useStockRequest();
  const { brands, loading, error } = useSelector((state) => state.firms);
  const [open, setOpen] = useState(false); // liftingstate up yapıldı çünkü kardeşler arası da bu bilgiye ihtiyaç duyulduğundan propla gönderildi parentten
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    getStock("brands")
  },[])
  return (
    <Box>
      <Typography variant="h3" color="primary.main" mb={2}>
        BRANDS
      </Typography>
      <Button color="error"  variant="contained" onClick={handleOpen}>
        ADD BRAND
      </Button>
      <BrandsModal open={open} handleClose={handleClose} />

      
     
      {/* {loading && <img src={loadingGif} alt="Loading" />} */}

      {/* {error && <Typography variant="body1">Hay aksi, bir hata oluştu!</Typography>} */}

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        marginTop={5}
      >
        {brands?.map((brand) => (
          <BrandsCard
            key={brand._id}
            {...brand}
           
            
          ></BrandsCard>
        ))}
      </Box>
    </Box>
  )
}

export default Brands





// getstock adında parametreli fonk ile verileri çağırıyoruz.