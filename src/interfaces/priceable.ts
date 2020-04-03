import Vatable from "./vatable"
import Unitable from "./unitable"
import bigDecimal from "js-big-decimal"

export default interface Priceable extends Vatable, Unitable {
  price: bigDecimal
  currency: string
}
