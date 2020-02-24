import BaseModel from './base_model'

export default class Currency extends BaseModel {
  id: string
  code: string
  name: string
  symbol: string

  constructor(data: any) {
    super(data)
    this.code = data.code
    this.name = data.name
    this.symbol = data.symbol
  }

  static get euro() {
    return new Currency({
      code: 'eur',
      name: 'Euro',
      symbol: '€'
    })
  }
}
