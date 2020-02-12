import cloneDeep from 'lodash.clonedeep'

export default class BaseModel {
  id: string
  createdAt: Date
  updatedAt: Date

  constructor(_data: any) {
    this.id = _data.id
    this.createdAt = _data.createdAt ? new Date(_data.createdAt) : new Date()
    this.updatedAt = _data.updatedAt ? new Date(_data.updatedAt) : new Date()
  }

  get exists() : boolean {
    return typeof this.id === 'string' && this.id.length > 0
  }

  get clone() {
    return cloneDeep(this)
  }
}