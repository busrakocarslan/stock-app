import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest"
import { useDispatch, useSelector } from "react-redux"
// import { firmPending } from "../features/firmSlice"

const Firms = () => {
  const { getFirms } = useStockRequest()
  const dispatch=useDispatch()
  const {firmsData,loading,error}= useSelector(state=>state.firms)

  useEffect(() => {
   
  getFirms()// bu fonk bize api dan firma bil getirecek. Başka yerde de lazım olacağından gelen verileri global state de tutmak lazım.
  }, [])

  return <div>
  <h2>Firms</h2>
  <ul>
    {firmsData?.map((firm) => (
      <li key={firm._id}>
        <div>Name: {firm.name}</div>
        <div>Phone: {firm.phone}</div>
        <div>Address: {firm.address}</div>
        <img src={firm.image} alt={firm.name} />
      </li>
    ))}
  </ul>
</div>}
    
 

export default Firms
// tekrar tekrar api isteği atmak yerine parametre alan bir fonk yazmalıyız. 