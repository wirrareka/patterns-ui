import bigDecimal from "js-big-decimal";

export default interface Shipable {
  deliveryDate: Date
  shippingDate: Date
  shippingPrice: bigDecimal
  shippingPriceWithVat: bigDecimal
  shippingReference: string
  shippingService: string
  weight: number
}
