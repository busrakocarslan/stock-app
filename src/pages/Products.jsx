import { Box, Button, Typography } from "@mui/material"
import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest";
import ProductTable from "../component/ProductTable"
import { useSelector } from "react-redux";



const Products = () => {
  const { getStock, stockData } = useStockRequest();
  const { products } = useSelector((state) => state.firms);
  useEffect(() => {
    getStock("products")

   
  }, [])
  return (
    <><Typography variant="h3" color="primary" mb={2}>Products</Typography>
    <Button variant="contained" color="secondary">New Product</Button>
     <Box
     display="flex"
     flexWrap="wrap"
     justifyContent="space-between"
     alignItems="center"
   >
     {products?.map((product) => (
       <ProductTable key={product.id} {...product}/>
        
        
      
     ))}
   </Box></>

    
    
  )
}

export default Products