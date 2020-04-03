import Currency from '../models/currency'
import bigDecimal from 'js-big-decimal'

export { PatternSettings } from './pattern_settings'
export { Locale } from './locale'

export type FormatDateType = (date: Date) => string
export type ParseDateType = (date: string) => Date
export type FormatPriceType = (price: bigDecimal | number, currency?: Currency) => string

export type Selection = { [id: string]: boolean }

export type FetchResponse<T> = {
  items: T[],
  total: number
}

export type FilterComparator = 'contains' | 'starts_with' | 'ends_with' | 'eq' | 'lt' | 'gt' | 'lte' | 'gte' | 'range'

export type FilterValue = string | number | [number, number] | Date | [Date, Date] | undefined

export type FilterState = {
  column: string
  active: boolean
  value?: FilterValue
  comparator: FilterComparator
  type: ColumnType
}

export type FilterStates = {
  [id: string]: FilterState
}

export enum ColumnType {
  Text,
  Number,
  Date,
  DateTime,
  Custom
}

export enum Alignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export interface Column<T> {
  id: string
  title: string
  type: ColumnType
  format?: (item: T) => React.ReactElement
  flex?: number
  width?: number
  sortable?: boolean
  filterable?: boolean
  visible?: boolean
  alignment?: Alignment
}

export type PageSizeItem = { title: string, value: number }

export interface PaymentMethod {
  id: string
  title: string
}
