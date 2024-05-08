import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  firmSuccess,
  firmRegister,
  firmPending,
  removeFirmAction,
} from "../features/firmSlice";

const useStockRequest = () => {
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(firmPending());
    try {
      const { data } = await axiosToken("/firms");
      dispatch(firmSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(firmRegister());
      console.log(error);
    }
  };
  const removeFirm = async (id) => {
    dispatch(firmPending());
    try {
      const { data } = await axiosToken.delete(`/firms/${id}`);
      dispatch(removeFirmAction(id));//data?
    } catch (error) {
      dispatch(firmRegister());
      console.log(error);
    }
  };
  const addFirm = async () => {
    try {
    } catch (error) {}
  };

  return { getFirms, removeFirm };
};

export default useStockRequest;

// içerisinde hook kullanacağımız için costom hook şeklinde çağırıyoruz.
