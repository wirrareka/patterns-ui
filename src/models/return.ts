import BaseModel from './base_model'
import { Returnable } from '../interfaces'
import { deserializeDate, deserializeString, deserializeNumber } from '../common'

export default class Return extends BaseModel implements Returnable {
  returnDate: Date
  condition: string
  costs: number
  result: string

  constructor(_data: any) {
    const data = _data || {}
    super(data)

    this.returnDate = deserializeDate(data.returnDate)
    this.condition = deserializeString(data.condition)
    this.costs = deserializeNumber(data.costs)
    this.result = deserializeString(data.result)
  }
}
