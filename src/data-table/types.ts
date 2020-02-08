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