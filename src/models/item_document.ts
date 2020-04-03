import { deserializeDate, deserializeNumber, deserializeString } from '../common'
import { TimeStamped, Notable, Shipable, VatSummarizable } from '../interfaces'
import BaseModel from './base_model'
import Contact from './contact'
import DocumentItem from './document_item'
import bigDecimal from 'js-big-decimal'

export default class ItemDocument extends BaseModel implements Notable, Shipable, TimeStamped {
  code: string
  note: string
  state: string
  items: DocumentItem[]
  vendor: Contact
  customer: Contact
  currency: string
  paymentMethod: string

  total: bigDecimal
  totalWithVat: bigDecimal

  shippingDate: Date
  deliveryDate: Date
  shippingPrice: bigDecimal
  shippingPriceWithVat: bigDecimal
  shippingService: string
  shippingReference: string
  weight: number

  issuedBy: string
  issuedById: string
  signature: string

  constructor(data: ItemDocument | any) {
    super(data)
    this.code = deserializeString(data.code)
    this.note = deserializeString(data.note)
    this.state = deserializeString(data.state)
    this.items = (data.items || []).map((item: any) => new DocumentItem(item))
    this.vendor = new Contact(data.vendor)
    this.customer = new Contact(data.customer)
    this.currency = deserializeString(data.currency)
    this.issuedBy = deserializeString(data.issuedBy)
    this.issuedById = deserializeString(data.issuedById)
    this.signature = deserializeString(data.signature)

    this.paymentMethod = deserializeString(data.paymentMethod)

    if (data instanceof ItemDocument) {
      this.shippingPrice = data.shippingPrice
      this.shippingPriceWithVat = data.shippingPriceWithVat
      this.total = data.total
      this.totalWithVat = data.totalWithVat
    } else {
      if (typeof data.shippingPrice === 'object' && data.shippingPrice.value) {
        this.shippingPrice = new bigDecimal(data.shippingPrice.value)
        this.shippingPriceWithVat = new bigDecimal(data.shippingPriceWithVat.value)
        this.total = new bigDecimal(data.total.value)
        this.totalWithVat = new bigDecimal(data.totalWithVat.value)
      } else {
        this.shippingPrice = new bigDecimal(data.shippingPrice)
        this.shippingPriceWithVat = new bigDecimal(data.shippingPriceWithVat)
        this.total = new bigDecimal(data.total)
        this.totalWithVat = new bigDecimal(data.totalWithVat)
      }
    }

    // shipable
    this.deliveryDate = deserializeDate(data.deliveryDate)
    this.shippingDate = deserializeDate(data.shippingDate)
    this.shippingService = deserializeString(data.shippingService)
    this.shippingReference = deserializeString(data.shippingReference)
    this.weight = deserializeNumber(data.weight)
  }

  get itemsTotal() {
    return this.items.reduce((total, item) => total = total.add(item.linePrice), new bigDecimal(0))
  }

  get itemsTotalWithVat() {
    return this.items.reduce((total, item) => total = total.add(item.linePriceWithVat), new bigDecimal(0))
  }

  recalculate() {
    this.total = this.itemsTotal.add(this.shippingPrice)
    this.totalWithVat = this.itemsTotalWithVat.add(this.shippingPriceWithVat)
  }

  newItem() {
    return new DocumentItem({ document_id: this.id })
  }

  numericCode() {
    return this.code.match(/([0-9]*)/g).join('')
  }

  workPrice() {
    const items = this.items.filter(i => i.name.toLowerCase().replace(/á/g, "a").match('praca'))
    return new bigDecimal(items.reduce((left: any, right: any) => left += parseFloat(right.linePriceWithVat.getValue()), 0)).round(2)
  }

  itemsPrice() {
    const items = this.items.filter(i => !i.name.toLowerCase().replace(/á/g, "a").match('praca'))
    return new bigDecimal(items.reduce((left: any, right: any) => left += parseFloat(right.linePriceWithVat.getValue()), 0)).round(2)
  }

  get vats() {
    const vats = {} as any
    this.items.forEach(item => {
      vats[item.vat] = !vats[item.vat] ? {
        base: item.linePrice || new bigDecimal('0'),
        price: item.vatPrice || new bigDecimal('0')
      } : {
        base: vats[item.vat].base.add(item.linePrice),
        price: vats[item.vat].price.add(item.vatPrice)
      }
    })

    return Object.keys(vats).map(vat => ({
      vat: parseFloat(vat),
      base: vats[vat].base,
      price: vats[vat].price
    } as VatSummarizable))
  }

  protected get _json() {
    return {
      code: this.code,
      note: this.note,
      state: this.state,
      items: this.items.map(item => item.json),
      vendor: this.vendor,
      customer: this.customer,
      currency: this.currency,
      paymentMethod: this.paymentMethod,
      total: this.total.getValue(),
      totalWithVat: this.totalWithVat.getValue(),
      shippingDate: this.shippingDate,
      deliveryDate: this.deliveryDate,
      shippingPrice: this.shippingPrice.getValue(),
      shippingPriceWithVat: this.shippingPriceWithVat.getValue(),
      shippingService: this.shippingService,
      shippingReference: this.shippingReference,
      weight: this.weight,
      issuedBy: this.issuedBy,
      issuedById: this.issuedById,
      signature: this.signature
    }
  }
}
