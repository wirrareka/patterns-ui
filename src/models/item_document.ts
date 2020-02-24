import { deserializeDate, deserializeNumber, deserializeString } from '../common'
import { TimeStamped, Notable, Shipable, VatSummarizable } from '../interfaces'
import BaseModel from './base_model'
import Contact from './contact'
import DocumentItem from './document_item'

export default class ItemDocument extends BaseModel implements Notable, Shipable, TimeStamped {
  code: string
  note: string
  state: string
  items: DocumentItem[]
  vendor: Contact
  customer: Contact
  currency: string
  paymentMethod: string

  total: number
  totalWithVat: number

  shippingDate: Date
  deliveryDate: Date
  shippingPrice: number
  shippingPriceWithVat: number
  shippingService: string
  shippingReference: string
  weight: number

  constructor(data: any) {
    super(data)
    this.code = deserializeString(data.code)
    this.note = deserializeString(data.note)
    this.state = deserializeString(data.state)
    this.items = (data.items || []).map((item: any) => new DocumentItem(item))
    this.vendor = new Contact(data.vendor)
    this.customer = new Contact(data.customer)

    this.paymentMethod = deserializeString(data.paymentMethod)

    this.total = deserializeNumber(data.total)
    this.totalWithVat = deserializeNumber(data.totalWithVat)

    // shipable
    this.deliveryDate = deserializeDate(data.deliveryDate)
    this.shippingDate = deserializeDate(data.shippingDate)
    this.shippingPrice = deserializeNumber(data.shippingPrice)
    this.shippingPriceWithVat = deserializeNumber(data.shippingPriceWithVat)
    this.shippingService = deserializeString(data.shippingService)
    this.shippingReference = deserializeString(data.shippingReference)
    this.weight = deserializeNumber(data.weight)
  }

  get itemsTotal() {
    return this.items.reduce((total, item) => total += item.linePrice, 0)
  }

  get itemsTotalWithVat() {
    return this.items.reduce((total, item) => total += item.linePriceWithVat, 0)
  }

  recalculate() {
    this.total = this.itemsTotal + this.shippingPrice
    this.totalWithVat = this.itemsTotalWithVat + this.shippingPriceWithVat
  }

  newItem() {
    return new DocumentItem({ document_id: this.id })
  }

  get vats() {
    const vats = {} as any
    this.items.forEach(item => {
      vats[item.vat] = !vats[item.vat] ? {
        base: item.linePrice,
        price: item.vatPrice
      } : {
        base: vats[item.vat].base + item.linePrice,
        price: vats[item.vat].price + item.vatPrice
      }
    })

    return Object.keys(vats).map(vat => ({
      vat: parseFloat(vat),
      base: vats[vat].base,
      price: vats[vat].price
    } as VatSummarizable))
  }
}
