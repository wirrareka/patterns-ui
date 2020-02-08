import React from 'react'
import produce from 'immer'
import { Column, ColumnType, FilterComparator, FilterState, FilterValue } from './types'

import TextFilter from './filters/text-filter'
import NumberFilter from './filters/number-filter'
import DateFilter from './filters/number-filter'

interface Props<T> {
  column: Column<T>
  filterState: FilterState
  onFilterStateChange: (state: FilterState, fetch: boolean) => void
}

export default class FilterRenderer<T> extends React.Component<Props<T>> {
  state = {}

  setFilterValue(column: Column<T>, value?: FilterValue, secondary: boolean = false) {
    const filterStates = produce(this.props.filterState, (state) => {
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
    this.props.onFilterStateChange(filterStates, false)
  }

  setFilterComparator(column: Column<T>, comparator: FilterComparator) {
    const filterStates = produce(this.props.filterState, (states) => {
      states[column.id].comparator = comparator
    })

    this.props.onFilterStateChange(filterStates, false)
  }

  async setFilterActive (column: Column<T>, value: boolean) {
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
      setFilterActive: this.setFilterActive,
      setFilterComparator: this.setFilterComparator,
      setFilterValue: this.setFilterValue
    }

    if (this.props.column.type === ColumnType.Text) {
      return <TextFilter {...filterProps} />
    }

    if (this.props.column.type === ColumnType.Number) {
      return <NumberFilter { ...filterProps } state={this.props.filterState} />
    }

    if (this.props.column.type === ColumnType.Date) {
      return <DateFilter { ...filterProps } state={this.props.filterState} />
    }

    return <div>unknown filter</div>
  }
}
