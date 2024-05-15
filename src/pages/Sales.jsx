import SaleModal from "../component/sale/SaleModal";
import SalesTable from "../component/sale/SalesTable";

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
    setInfoPurchases(initialState);
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
          handleClose={handleClose}
          infoSales={infoSales}
          setInfoSales={setInfoSales}
        />
      </Box>
    </div>
  );
};

export default Sales;
