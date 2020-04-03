import { Named } from '../interfaces'
import { deserializeString } from "../common"
import BaseModel from './base_model'
import Contact from './contact'

export default class User extends BaseModel implements Named {
  name: string
  email: string
  isActive: boolean
  color: string
  note: string
  role: string
  contact: Contact

  constructor(_data: any) {
    const data = _data || {}
    super(data)
    this.name = deserializeString(data.name)
    this.email = deserializeString(data.email)
    this.isActive = data.isActive || false
    this.color = deserializeString(data.color)
    this.note = deserializeString(data.note)
    this.role = deserializeString(data.role)
    this.contact = new Contact(data.contact || {})
  }
}
