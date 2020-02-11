import BaseModel from './base_model'
import Contact from './contact'
import Currency from './currency'
import InvoiceItem from './invoice-item'

export default class Invoice extends BaseModel {
  code: string
  company: Contact
  customer: Contact
  currency: Currency
  price: number
  price_with_vat: number
  dueAt: Date
  note: string
  items: InvoiceItem[]
  paymentMethod: string

  constructor(data: any) {
    super(data)
    this.code = data.code
    this.currency = new Currency(data.currency || {})
    this.company = new Contact(data.company || {})
    this.customer = new Contact(data.customer || {})
    this.price = data.price || 0
    this.price_with_vat = data.price_with_vat || 0
    this.dueAt = data.dueAt ? new Date(data.dueAt) : new Date(this.createdAt)
    this.note = data.note || ''
    this.items = (data.items || []).map((i: any) => new InvoiceItem(i))
    this.paymentMethod = data.paymentMethod
    this.recalculate()
  }

  recalculate() {
    this.price = this.items.reduce((prev, next) => prev += (next.line_price), 0) || 0
    this.price_with_vat = this.items.reduce((prev, next) => prev += (next.line_price + next.vat_price), 0) || 0
  }

  get vats() {
    const vats = {} as any
    this.items.forEach(item => {
      if (!vats[`${item.vat}`]) {
        vats[`${item.vat}`] = { base: item.line_price, price: item.vat_price }
      } else {
        vats[`${item.vat}`] += { base: item.line_price, price: item.vat_price }
      }
    })
    return Object.keys(vats).map(vat => ({ vat, base: vats[vat].base, price: vats[vat].price }))
  }
}
