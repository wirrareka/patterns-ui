import Orderable from '../interfaces/orderable'
import NamedItemDocument from './named_item_document'
import Return from './return'
import { deserializeNumber } from '../common'

export default class Order extends NamedItemDocument implements Orderable {
  returns: Return[]
  returnCosts: number

  constructor(data: any) {
    super(data)
    this.returns = (data.returns || []).map(item => new Return(item))
    this.returnCosts = deserializeNumber(data.returnCosts)
  }

  recalculate() {
    super.recalculate()
    this.returnCosts = this.returns.reduce((costs, next) => costs += next.costs, 0)
  }

  public get json() {
    return {
      ...this._json,
      returns: this.returns,
      returnCosts: this.returnCosts
    }
  }
}
