import BaseModel from './base_model'
import { Contactable, Nameable } from '../interfaces'
import { deserializeString } from "../common"

export default class Contact extends BaseModel implements Contactable, Nameable {
  name: string
  street: string
  street2: string
  zip: string
  city: string
  country: string
  email: string
  phone: string
  site: string
  isActive: boolean
  note: string
  firstName: string
  lastName: string
  businessId: string
  vatId: string
  vatPayerId: string

  constructor(_data: any) {
    const data = _data || {}
    super(data)
    this.name = deserializeString(data.name)
    this.street = deserializeString(data.street)
    this.street2 = deserializeString(data.street2)
    this.zip = deserializeString(data.zip)
    this.city = deserializeString(data.city)
    this.country = deserializeString(data.country)
    this.email = deserializeString(data.email)
    this.phone = deserializeString(data.phone)
    this.site = deserializeString(data.site)
    this.isActive = data.isActive || false
    this.note = deserializeString(data.note)
    this.firstName = deserializeString(data.firstName)
    this.lastName = deserializeString(data.lastName)

    // VatAddressable
    this.businessId = deserializeString(data.businessId)
    this.vatId = deserializeString(data.vatId)
    this.vatPayerId = deserializeString(data.vatPayerId)
  }

  getName() {
    return this.name || this.fullName
  }

  get fullName() {
    return [this.firstName, this.lastName].filter(f => f && f.length > 0).join(' ')
  }
}
