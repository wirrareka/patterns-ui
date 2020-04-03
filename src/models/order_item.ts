import BaseModel from './base_model'
import Indexable from '../interfaces/indexable'
import Sellable from '../interfaces/sellable'
import bigDecimal from 'js-big-decimal'

export default class OrderItem extends BaseModel implements Indexable, Sellable {
  name: string
  code: string
  quantity: number
  unitPriceWithVat: bigDecimal
  linePrice: bigDecimal
  linePriceWithVat: bigDecimal
  price: bigDecimal
  currency: string
  vat: number
  unit: string
  index: number
  custom1: string
  custom2: string
  custom3: string

  constructor(data: any) {
    super(data)

    this.name = data.name || ''
    this.code = data.code || ''
    this.quantity = data.quantity || 0
    this.unitPriceWithVat = new bigDecimal(data.unitPriceWithVat)
    this.linePrice = new bigDecimal(data.linePrice)
    this.linePriceWithVat = new bigDecimal(data.linePriceWithVat)
    this.price = new bigDecimal(data.price)
    this.currency = data.currency
    this.vat = data.vat
    this.unit = data.unit
    this.index = data.index
  }
}
