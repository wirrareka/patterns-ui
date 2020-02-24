import BaseModel from './base_model'
import Indexable from '../interfaces/indexable'
import Sellable from '../interfaces/sellable'

export default class OrderItem extends BaseModel implements Indexable, Sellable {
  name: string
  code: string
  quantity: number
  unitPriceWithVat: number
  linePrice: number
  linePriceWithVat: number
  price: number
  currency: number
  vat: number
  unit: string
  index: number

  constructor(data: OrderItem) {
    super(data)

    this.name = data.name || ''
    this.code = data.code || ''
    this.quantity = data.quantity || 0
    this.unitPriceWithVat = data.unitPriceWithVat || 0
    this.linePrice = data.linePrice
    this.linePriceWithVat = data.linePriceWithVat
    this.price = data.price
    this.currency = data.currency
    this.vat = data.vat
    this.unit = data.unit
    this.index = data.index
  }
}
