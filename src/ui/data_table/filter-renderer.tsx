import React from 'react'
import produce from 'immer'
import { Column, ColumnType, FilterComparator, FilterState, FilterValue, FormatDateType, ParseDateType } from '../../types'

import TextFilter from './filters/text-filter'
import NumberFilter from './filters/number-filter'
import DateFilter from './filters/number-filter'

interface Props<T> {
  column: Column<T>
  filterState: FilterState
  onFilterStateChange: (state: FilterState, fetch: boolean) => void
  formatDate: FormatDateType
  parseDate: ParseDateType
}

export default class FilterRenderer<T> extends React.Component<Props<T>> {
  state = {}

  constructor(props: Props<T>) {
    super(props)

    this.setFilterValue = this.setFilterValue.bind(this)
    this.setFilterComparator = this.setFilterComparator.bind(this)
    this.setFilterActive = this.setFilterActive.bind(this)
  }

  setFilterValue(column: Column<T>, value?: FilterValue, secondary: boolean = false) {
    const filterState = produce(this.props.filterState, (state) => {
      if (state.comparator === 'range') {
        // range
        if (column.type === ColumnType.Number) {
          if (!Array.isArray(state)) {
            state.value = secondary ? [0, value as number] : [value as number, 0]
          } else {
            if (secondary) {
              state.value = [state.value as [number, number][0], value as number]
            } else {
              state.value = [value as number, state.value as [number, number][0]]
            }
          }
        }

        if (column.type === ColumnType.Date) {
          if (!Array.isArray(state.value)) {
            state.value = secondary ? [state.value as Date, value as Date] : [value as Date, state.value as Date]
          } else {
            const nextVal = (state.value as [Date, Date])[0]
            if (secondary) {
              state.value = [nextVal, value as Date]
            } else {
              state.value = [value as Date, nextVal]
            }
          }
        }
      } else {
        // single value
        state.value = value
      }
    })
    this.props.onFilterStateChange(filterState, false)
  }

  setFilterComparator(column: Column<T>, comparator: FilterComparator) {
    const filterState = produce(this.props.filterState, (state) => {
      state.comparator = comparator
    })

    this.props.onFilterStateChange(filterState, false)
  }

  setFilterActive (column: Column<T>, value: boolean) {
    const filterState = produce(this.props.filterState, (state) => {
      state.active = value
      if (!value) {
        if (column.type === ColumnType.Text) {
          state.value = ''
        } else if (column.type === ColumnType.Number) {
          state.value = 0
        } else if (column.type === ColumnType.Date) {
          state.value = new Date()
        }
      }
    })
    this.props.onFilterStateChange(filterState, true)
  }

  render() {
    const filterProps = {
      column: this.props.column,
      filterState: this.props.filterState,
      setFilterActive: this.setFilterActive,
      setFilterComparator: this.setFilterComparator,
      setFilterValue: this.setFilterValue
    }

    if (this.props.column.type === ColumnType.Text) {
      return <TextFilter {...filterProps} />
    }

    if (this.props.column.type === ColumnType.Number) {
      return <NumberFilter { ...filterProps } />
    }

    if (this.props.column.type === ColumnType.Date) {
      return <DateFilter { ...filterProps } />
    }

    return <div>unknown filter</div>
  }
}
