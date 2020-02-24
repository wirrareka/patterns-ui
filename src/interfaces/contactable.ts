import Addressable from './addressable'
import Nameable from './nameable'
import Notable from './notable'
import VatAddressable from './vat_addressable'
import TimeStamped from './timestamped'

export default interface Contactable extends Addressable, Nameable, Notable, VatAddressable, TimeStamped {
  id: string
  code: string
  isActive: boolean
  exists: boolean
  clone: () => Contactable
}
