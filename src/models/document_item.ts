import BaseModel from './base_model'
import { Indexable, Sellable } from '../interfaces'
import { deserializeNumber, deserializeString } from '../common'

export default class DocumentItem extends BaseModel implements Indexable, Sellable {
  index: number
  document_id: string
  name: string
  code: string
  quantity: number
  unitPriceWithVat: number
  linePrice: number
  linePriceWithVat: number
  price: number
  currency: string
  vat: number
  unit: string

  constructor(_data: any) {
    const data = _data || {}
    super(data)
    this.document_id = deserializeString(data.document_id)
    this.index = deserializeNumber(data.index)
    this.name = deserializeString(data.name)
    this.code = deserializeString(data.code)
    this.unit = deserializeString(data.unit)
    this.currency = deserializeString(data.currency)
    this.price = deserializeNumber(data.price)
    this.quantity = deserializeNumber(data.quantity)
    this.vat = deserializeNumber(data.vat)
    this.unitPriceWithVat = deserializeNumber(data.unitPriceWithVat)
    this.linePrice = deserializeNumber(data.linePrice)
    this.linePriceWithVat = deserializeNumber(data.linePriceWithVat)
  }

  get vatPrice() {
    return this.linePrice * (this.vat / 100)
  }

  recalculate() {
    this.linePrice = this.price * this.quantity
    this.linePriceWithVat = this.linePrice + this.vatPrice
  }
}
