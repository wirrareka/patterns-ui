import cloneDeep from 'lodash.clonedeep'
import { deserializeDate } from '../common'
import TimeStamped from '../interfaces/timestamped'

export default class BaseModel implements TimeStamped {
  id: string
  createdAt: Date
  updatedAt: Date

  constructor(_data: any) {
    const data = _data || {}
    this.id = data.id
    this.createdAt = deserializeDate(data.createdAt)
    this.updatedAt = deserializeDate(data.updatedAt)
  }

  get exists() : boolean {
    return typeof this.id === 'string' && this.id.length > 0
  }

  get clone() {
    return cloneDeep(this)
  }
}