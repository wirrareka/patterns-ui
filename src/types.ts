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
}

export type PageSizeItem = { title: string, value: number }

export type Locale = {
  code: string
  range_from: string
  range_to: string
  day: string
  at_day: string
  older_than: string
  newer_than: string
  range: string
  value: string
  equal: string
  less_than: string
  greater_than: string
  contains: string
  starts_with: string
  ends_with: string
  per_page: string
  selection_none: string
  selection_one: string
  selection_few: string
  selection_many: string
  items_none: string
  items_one: string
  items_few: string
  items_many: string
}