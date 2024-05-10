import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  
  firmRegister,
  firmPending,
 
  getStockSuccess,
} from "../features/firmSlice";
import { toastSuccessNotify,toastErrorNotify } from "../helper/ToastNotify";

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
      const stockData = data.data; // bunu şundan dolayı yaptık api dan gelen veriler data nın içinde data var onun içinde data.data diye içerisine yazmadık da onu bir değişken olarak atadık.Çünkü 45. sırada payloadın içinde data.data şeklinde yazmaya izin vermiyor.
      dispatch(getStockSuccess({ stockData, path })); // burada klasik payload yazıyoruz aslında ancak burada payloadın içinde 2 parametre olduğundan destruc edip yzıldı
      console.log(data);
    } catch (error) {
      dispatch(firmRegister());
      console.log(error);
    }
  };
  // path paraetresi verilmez ise deafult olarak firms atandı.id yi de delete id ile sildiği için vermek zorundasın
  const deleteStock = async (path = "firms", id) => {
    dispatch(firmPending());
    try {
      await axiosToken.delete(`/${path}/${id}`); // delete işlemi herhangi bir şey döndürmediği için değişkene atamaya gerek yokama delete yazmak zorundasın dikkat et!

      getStock(path); // get fonk yeniden çağıracaksın
    } catch (error) {
      dispatch(firmRegister());
      console.log(error);
    }
  };

//!-----------------Yeni bir firma ekleme işlemi-----------
  const createStock = async (path ,firminfo) => {
    dispatch(firmPending());
    try {
      await axiosToken.post(`/${path}`,firminfo);
     toastSuccessNotify("added sucsessfully")
      getStock(path); 
      // console.log(data);
    } catch (error) {
      dispatch(firmRegister());
      toastErrorNotify("Oops! there is something wrong for adding");
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
  return { getStock, deleteStock,createStock };
};

export default useStockRequest;

// içerisinde hook kullanacağımız için costom hook şeklinde çağırıyoruz.


// //!-----------Firma bilgilerinin güncellenmesi işlemi-----
// const updateData = async (endpoint, datas, id) => {
//   //? 3 durum için dispatch yayını adına firmSlice a ihtiyacımız var
//   dispatch(fetchStart()); //* pending
//   try {
//     await axiosToken.patch(
//       `/${endpoint}/${id}`, datas
//     ); //* güvenlikli istek kullanıyoruz. Firma oluşturacağımız için '/firms' ekliyoruz
//     // console.log(data);
//     // dispatch(getDataSuccess(data)); //* fullfilled
//     toastSuccessNotify("Updated succesfully!");
//     getDatas(endpoint); //? oluşturma işlemi başarılı olduktan sonra firmaları getiren fonksiyon
//   } catch (error) {
//     // console.log(error);
//     dispatch(fetchFail()); //* rejected
//     toastErrorNotify("Oops! there is something wrong for updating");
//   }
// };