import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import {firmSuccess,firmRegister,firmPending} from "../features/firmSlice"

const useStockRequest = () => {
  const { axiosToken } = useAxios()
  const dispatch = useDispatch()
 

  const getFirms = async () => {
    dispatch(firmPending())
    try {
      const { data } =await axiosToken("/firms")
      dispatch(firmSuccess(data))
      console.log(data)
      
    } catch (error) {
      dispatch(firmRegister())
      console.log(error)
    }
  }

  return { getFirms }
}

export default useStockRequest

// içerisinde hook kullanacağımız için costom hook şeklinde çağırıyoruz.
