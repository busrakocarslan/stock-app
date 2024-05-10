import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  firmSuccess,
  firmRegister,
  firmPending,
  removeFirmAction,
  SalesSuccess,
  getStockSuccess,
} from "../features/firmSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  // const getFirms = async () => {
  //   dispatch(firmPending());
  //   try {
  //     const { data } = await axiosToken("/firms");
  //     dispatch(firmSuccess(data));// slice da eklemeseydim buraya data.data demem gerekecekti ben slice e ekledim
  //     console.log(data);
  //   } catch (error) {
  //     dispatch(firmRegister());
  //     console.log(error);
  //   }
  // };
  // const getSales = async () => {
  //   dispatch(firmPending());
  //   try {
  //     const { data } = await axiosToken("/sales");
  //     dispatch(SalesSuccess(data));// slice da eklemeseydim buraya data.data demem gerekecekti ben slice e ekledim
  //     console.log(data);
  //   } catch (error) {
  //     dispatch(firmRegister());
  //     console.log(error);
  //   }
  // };

  //? bu fonksiyon path kısmını paratemre olarak aldığından ayrı ayrı her işlem için fonk yazmak yerine tek bir fonk ile bu işlem hepsinde ayrı ayrı gerçekleşmiş oluyor.Burada buraya gelen path bilgisini de slice kısmında yazdığımız fonkiyona göndererek onu da parametrik hale getirdik.
  const getStock = async (path = "firms") => {
    dispatch(firmPending());
    try {
      const { data } = await axiosToken(`/${path}`);
      const stockData = data.data;// bunu şundan dolayı yaptık api dan gelen veriler data nın içinde data var onun içinde data.data diye içerisine yazmadık da onu bir değişken olarak atadık.Çünkü 45. sırada payloadın içinde data.data şeklinde yazmaya izin vermiyor.
      dispatch(getStockSuccess({ stockData, path })); // burada klasik payload yazıyoruz aslında ancak burada payloadın içinde 2 parametre olduğundan destruc edip yzıldı
      console.log(data);
    } catch (error) {
      dispatch(firmRegister());
      console.log(error);
    }
  };
  const deleteStock = async (path = "firms") => {
    dispatch(firmPending());
    try {
      await axiosToken(`/${path}/{id}`);

      getStockSuccess(path); // slice da eklemeseydim buraya data.data demem gerekecekti ben slice e ekledim
    } catch (error) {
      dispatch(firmRegister());
      console.log(error);
    }
  };
  // const removeFirm = async (id) => {
  //   dispatch(firmPending());
  //   try {
  //     const { data } = await axiosToken.delete(`/firms/${id}`);
  //     dispatch(removeFirmAction(id)); //data?
  //   } catch (error) {
  //     dispatch(firmRegister());
  //     console.log(error);
  //   }
  // };
 

  // return { getStock, removeFirm,deleteStock };
  return { getStock,deleteStock };
};

export default useStockRequest;

// içerisinde hook kullanacağımız için costom hook şeklinde çağırıyoruz.
