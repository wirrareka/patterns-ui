import BaseModel from "./base_model"

export default class Contact extends BaseModel {
  name: string
  street: string
  street2: string
  zip: string
  city: string
  country: string
  email: string
  phone: string
  site: string
  business_id: string
  vat_id: string
  vat_payer_id: string
  isActive: boolean
  note: string
  firstName: string
  lastName: string
  fullName: string

  constructor(data: any) {
    super(data)

    this.name = data.name || ''
    this.street = data.street || ''
    this.street2 = data.street2 || ''
    this.zip = data.zip || ''
    this.city = data.city || ''
    this.country = data.country || ''
    this.email = data.email || ''
    this.phone = data.phone || ''
    this.site = data.site || ''
    this.business_id = data.business_id || ''
    this.vat_id = data.vat_id || ''
    this.vat_payer_id = data.vat_payer_id || ''
    this.isActive = data.isActive || ''
    this.note = data.note || ''
    this.firstName = data.firstName || ''
    this.lastName = data.lastName || ''
    this.fullName = data.fullName || [data.firstName, data.lastName].filter(f => f && f.length > 0).join(' ')
  }
}
