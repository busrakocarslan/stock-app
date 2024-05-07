import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest"

const Firms = () => {
  const { getFirms } = useStockRequest()

  useEffect(() => {
    getFirms()// bu fonk bize api dan firma bil getirecek. Başka yerde de lazım olacağından gelen verileri global state de tutmak lazım.
  }, [])

  return <div>Firms</div>
}

export default Firms
// tekrar tekrar api isteği atmak yerine parametre alan bir fonk yazmalıyız. 