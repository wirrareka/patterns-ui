import ItemDocumentable from './item_documentable'
import Returnable from './returnable'

export default interface Orderable extends ItemDocumentable {
  returns: Returnable[]
}
