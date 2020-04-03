import ItemDocument from './item_document'
import { deserializeDate, deserializeString } from '../common'
import { Invoicable } from '../interfaces'

export default class Invoice extends ItemDocument implements Invoicable {
  dueDate: Date
  paymentMethod: string
  isPaid: boolean
  isSent: boolean

  constructor(_data: any) {
    const data = _data || {}
    super(data)
    this.dueDate = deserializeDate(data.dueDate)
    this.paymentMethod = deserializeString(data.paymentMethod)
    this.isSent = data.isSent || false
    this.isPaid = data.isPaid || false
  }

  public get json() {
    return {
      ...this._json,
      dueDate: this.dueDate,
      paymentMethod: this.paymentMethod,
      isPaid: this.isPaid,
      isSent: this.isSent
    }
  }
}
