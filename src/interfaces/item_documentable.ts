import Contactable from './contactable'
import Indexable from './indexable'
import Sellable from './sellable'
import TimeStamped from './timestamped'
import Notable from './notable'
import Shipable from './shipable'
import bigDecimal from 'js-big-decimal'

export default interface ItemDocumentable extends Notable, Shipable, TimeStamped {
  code: string
  state: string
  items: (Sellable & Indexable)[]
  total: bigDecimal
  totalWithVat: bigDecimal
  vendor: Contactable
  customer: Contactable
  itemsTotal: bigDecimal
  itemsTotalWithVat: bigDecimal

  recalculate(): void
}
