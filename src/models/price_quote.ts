import NamedItemDocument from './item_document'
import { deserializeDate } from '../common'

export default class PriceQuote extends NamedItemDocument {
  validTill: Date

  constructor(_data: any) {
    const data = _data || {}
    super(data)
    this.validTill = deserializeDate(data.validTill || data.createdAt)
  }
}
