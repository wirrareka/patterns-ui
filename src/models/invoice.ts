import ItemDocument from './item_document'
import { deserializeDate, deserializeString } from '../common'
import { Invoicable, VatSummarizable } from '../interfaces'

export default class Invoice extends ItemDocument implements Invoicable {
  dueDate: Date
  paymentMethod: string

  constructor(_data: any) {
    const data = _data || {}
    super(data)
    this.dueDate = deserializeDate(data.dueDate)
    this.paymentMethod = deserializeString(data.paymentMethod)
  }
}
