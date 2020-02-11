import BaseModel from './base_model'

export default class PaymentMethod extends BaseModel {
  title: string

  constructor(data: any) {
    super(data)
    this.title = data.title
  }
}