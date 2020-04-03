import BaseModel from './base_model'
import bigDecimal from 'js-big-decimal'

export default class InvoiceItem extends BaseModel {
  invoice_id: string
  index: number
  item_id: string
  item_name: string
  item_description: string
  unit_id: string
  unit_code: string
  unit_price: bigDecimal
  line_price: bigDecimal
  quantity: number
  vat: number
  vat_price: bigDecimal
  price_with_vat: bigDecimal
  note: string

  constructor(data: any) {
    super(data)
    this.invoice_id = data.invoice_id || ''
    this.index = data.index || 0
    this.item_id = data.item_id || ''
    this.item_name = data.item_name || ''
    this.item_description = data.item_description || ''
    this.unit_id = data.unit_id || ''
    this.unit_code = data.unit_code || ''
    this.unit_price = new bigDecimal(data.unit_price)
    this.line_price = new bigDecimal(data.line_price)
    this.quantity = data.quantity || 0
    this.vat = data.vat || 0
    this.vat_price = new bigDecimal(data.vat_price)
    this.price_with_vat = new bigDecimal(data.price_with_vat)
    this.note = data.note || ''
  }

  recalculate() {
    this.line_price = this.unit_price.multiply(new bigDecimal(this.quantity))
    this.vat_price = this.line_price.multiply(new bigDecimal(this.vat).divide(new bigDecimal(100), 3))
    this.price_with_vat = this.line_price.multiply(this.vat_price)
  }
}
