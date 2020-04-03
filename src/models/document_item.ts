import BaseModel from './base_model'
import { Indexable, Sellable } from '../interfaces'
import { deserializeNumber, deserializeString } from '../common'
import bigDecimal from 'js-big-decimal'

export default class DocumentItem extends BaseModel implements Indexable, Sellable {
  index: number
  document_id: string
  name: string
  code: string
  unit: string
  quantity: number
  price: bigDecimal
  unitPriceWithVat: bigDecimal
  linePrice: bigDecimal
  linePriceWithVat: bigDecimal
  currency: string
  vat: number
  vatTotalOnly: boolean
  custom1: string
  custom2: string
  custom3: string
  custom4: string

  constructor(_data: DocumentItem | any) {
    const data = _data || {}
    super(data)
    this.document_id = deserializeString(data.document_id)
    this.index = deserializeNumber(data.index)
    this.name = deserializeString(data.name)
    this.code = deserializeString(data.code)
    this.unit = deserializeString(data.unit)
    this.currency = deserializeString(data.currency)
    this.quantity = deserializeNumber(data.quantity)

    if (_data instanceof DocumentItem) {
      this.price = data.price
      this.unitPriceWithVat = data.unitPriceWithVat
      this.linePrice = data.linePrice
      this.linePriceWithVat = data.linePriceWithVat
    } else {
      if (typeof data.price === 'object' && data.price.value) {
        this.price = new bigDecimal(data.price.value)
        this.unitPriceWithVat = new bigDecimal(data.unitPriceWithVat.value)
        this.linePrice = new bigDecimal(data.linePrice.value)
        this.linePriceWithVat = new bigDecimal(data.linePriceWithVat.value)
      } else {
        this.price = new bigDecimal(data.price)
        this.unitPriceWithVat = new bigDecimal(data.unitPriceWithVat)
        this.linePrice = new bigDecimal(data.linePrice)
        this.linePriceWithVat = new bigDecimal(data.linePriceWithVat)
      }
    }
    this.vat = deserializeNumber(data.vat)

    this.vatTotalOnly = data.vatTotalOnly || false

    this.custom1 = data.custom1 || ''
    this.custom2 = data.custom2 || ''
    this.custom3 = data.custom3 || ''
    this.custom4 = data.custom4 || ''
  }

  get vatPrice() {
    return this.linePrice.multiply(new bigDecimal(this.vat / 100))
  }

  recalculate(skipVat: boolean = false) {
    this.linePrice = this.price.multiply(new bigDecimal(this.quantity)).round(2)
    if (!skipVat) {
      this.linePriceWithVat = this.linePrice.add(this.vatPrice).round(2)
    }
  }

  get json() {
    return {
      id: this.id,
      index: this.index,
      name: this.name,
      code: this.code,
      unit: this.unit,
      quantity: this.quantity,
      price: this.price.round(3).getValue(),
      unitPriceWithVat: this.unitPriceWithVat.round(3).getValue(),
      vatPrice: this.vatPrice.round(2).getValue(),
      linePrice: this.linePrice.round(2).getValue(),
      linePriceWithVat: this.linePriceWithVat.round(2).getValue(),
      currency: this.currency,
      vat: this.vat,
      vatTotalOnly: this.vatTotalOnly,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      custom1: this.custom1,
      custom2: this.custom2,
      custom3: this.custom3,
      custom4: this.custom4
    }
  }
}
