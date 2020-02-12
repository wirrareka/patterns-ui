import Invoice from './invoice'

export default class Offer extends Invoice {
  validTill: Date

  constructor(data: any) {
    super(data)
    this.validTill = data.validTill ? new Date(data.validTill) : new Date(this.createdAt)
  }
}