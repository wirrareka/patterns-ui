import ItemDocument from './item_document'
import { deserializeDate } from '../common'

export default class PriceQuote extends ItemDocument {
  validTill: Date

  constructor(_data: any) {
    const data = _data || {}
    super(data)
    this.validTill = deserializeDate(data.validTill || data.createdAt)
  }
}