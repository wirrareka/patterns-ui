import Orderable from '../interfaces/orderable'
import ItemDocument from './item_document'
import Return from './return'
import { deserializeNumber } from '../common'

export default class Order extends ItemDocument implements Orderable {
  returns: Return[]
  returnCosts: number

  constructor(data) {
    super(data)
    this.returns = (data.returns || []).map(item => new Return(item))
    this.returnCosts = deserializeNumber(data.returnCosts)
  }

  get itemsTotal() {
    return this.items.reduce((total, item) => total += item.linePrice, 0)
  }

  get itemsTotalWithVat() {
    return this.items.reduce((total, item) => total += item.linePriceWithVat, 0)
  }

  recalculate() {
    super.recalculate()
    this.returnCosts = this.returns.reduce((costs, next) => costs += next.costs, 0)
  }
}
