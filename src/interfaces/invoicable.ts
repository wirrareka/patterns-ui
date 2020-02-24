import ItemDocumentable from './item_documentable'

export default interface Invoicable extends ItemDocumentable {
  currency: string
  dueDate: Date
  paymentMethod: string
}
