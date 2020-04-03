import ItemDocument from './item_document'
import { deserializeString } from '../common'

export default class NamedItemDocument extends ItemDocument {
  name: string

  constructor(data: any) {
    super(data)
    this.name = deserializeString(data.name)
  }
}