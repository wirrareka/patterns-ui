import Priceable from "./priceable"
import bigDecimal from "js-big-decimal";

export default interface LinePriceable extends Priceable {
  quantity: number
  unitPriceWithVat: bigDecimal
  linePrice: bigDecimal
  linePriceWithVat: bigDecimal
}
