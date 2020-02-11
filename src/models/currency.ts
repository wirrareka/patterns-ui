import BaseModel from './base_model'

export default class Currency extends BaseModel {
  id: string
  name: string
  symbol: string

  constructor(data: any) {
    super(data)
    this.name = data.name
    this.symbol = data.symbol
  }
}