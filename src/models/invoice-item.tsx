import BaseModel from './base_model'

export default class InvoiceItem extends BaseModel {
  invoice_id: string
  index: number
  item_id: string
  item_name: string
  item_description: string
  unit_id: string
  unit_code: string
  unit_price: number
  line_price: number
  quantity: number
  vat: number
  vat_price: number
  price_with_vat: number
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
    this.unit_price = data.unit_price || 0
    this.line_price = data.line_price || 0
    this.quantity = data.quantity || 0
    this.vat = data.vat || 0
    this.vat_price = data.vat_price || 0
    this.price_with_vat = data.price_with_vat || 0
    this.note = data.note || ''
  }

  recalculate() {
    this.line_price = this.unit_price * this.quantity
    this.vat_price = this.line_price * (this.vat / 100)
    this.price_with_vat = this.line_price + this.vat_price
  }
}
