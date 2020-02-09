import React, { Component } from 'react'
import produce from 'immer'
import {
  Button, Classes, Colors, Icon, Popover, PopoverInteractionKind, PopoverPosition, Checkbox, Tag, Tooltip
} from '@blueprintjs/core'

import Pagination from './pagination'
import ColumnPicker from './column_picker'

import { formatDate } from '../common'

import {
  Container, FlexColumn, FlexRow, Toolbar, Header, Content, ItemRow, ExpandedItemRow, SelectionCount, Cell
} from './components'

import {
  Column, ColumnType, FilterComparator, FilterState, FilterStates, FetchResponse, Selection
} from '../types'

import { t } from '../locale-manager'
import FilterRenderer from './filter-renderer'

import './data-table.scss'

interface Props<T> {
  columns: Column<T>[]
  expandable: boolean
  fetch: (page: number, pageSize: number, sort: string, sortDir: 'asc' | 'desc', filters: FilterStates) => Promise<FetchResponse<T>>
  sort: string
  sortDir: 'asc' | 'desc'
  multiple: boolean
  onItemSelect: (item: T) => void
  onSelectionChange?: (items: T[]) => void
  detailRenderer?: (item: T) => React.ReactElement
  formatDate?: (date: Date) => string
  parseDate?: (date: Date) => string
  locale?: string
}

interface State<T> {
  query: string
  page: number
  pageSize: number
  total: number
  sort: string
  sortDir: 'asc' | 'desc'
  items: T[]
  filterStates: FilterStates
  loading: boolean
  selection: Selection
  expanded: Selection
  columns: Column<T>[]
}

export default class DataTable<T> extends Component<Props<T>, State<T>> {
  constructor(props: Props<T>) {
    super(props)

    this.state = {
      query: '',
      page: 1,
      pageSize: 50,
      total: 0,
      sort: this.props.columns[0].id,
      sortDir: 'asc',
      items: [],
      loading: false,
      selection: {},
      expanded: {},
      columns: this.props.columns,
      filterStates: this.buildFilterStates(this.props.columns)
    }

    this.selectAll = this.selectAll.bind(this)
  }

  public static ofType<T>() {
    return DataTable as new (props: Props<T>) => DataTable<T>
  }

  componentDidMount() {

    this.fetch()
  }

  buildFilterStates(columns: Column<T>[]) {
    const state = {} as FilterStates
    const getState = (column: Column<T>) => {
      const base = {
        column: column.id,
        active: false,
        comparator: 'contains' as FilterComparator,
        type: column.type
      }

      if (column.type === ColumnType.Text) {
        return {...base, value: '', comparator: 'contains' } as FilterState
      }

      if (column.type === ColumnType.Number) {
        return {...base, value: 0, comparator: 'eq' } as FilterState
      }

      if (column.type === ColumnType.Date) {
        return {...base, value: new Date(), comparator: 'eq' } as FilterState
      }

      return base
    }

    columns.forEach(column => state[column.id] = getState(column))
    return state
  }

  async fetch() {
    await this.setState({ loading: true })
    const { page, pageSize, sort, sortDir, filterStates } = this.state
    const { items, total } = await this.props.fetch(page, pageSize, sort, sortDir, filterStates)
    const selection = {} as Selection
    items.forEach((item: any) => selection[item.id] = false)
    await this.setState({ items, selection, total, loading: false })
  }

  formatSelection() {
    const count = this.getSelectedIds().length

    if (count === 0) {
      return <SelectionCount>
        { t('selection_none') }
      </SelectionCount>
    } else if  (count === 1) {
      return <SelectionCount>
        { t('selection_one') } <Tag round minimal intent="primary"><strong>{count}</strong></Tag> { t('items_one') }
      </SelectionCount>
    } else if (count > 1 && count < 5) {
      return <SelectionCount>
        { t('selection_few') } <Tag round minimal intent="primary"><strong>{count}</strong></Tag> { t('items_few') }
      </SelectionCount>
    } else {
      return <SelectionCount>
        { t('selection_many') } <Tag round minimal intent="primary"><strong>{count}</strong></Tag> { t('items_many') }
      </SelectionCount>
    }
  }

  formatValue(item: T, column: Column<T>) {
    if (column.format) {
      return column.format(item)
    }

    const _item = (item as any)
    let value = _item[column.id]

    if (column.type === ColumnType.Date) {
      return formatDate(value)
    }

    if (column.type === ColumnType.DateTime) {
      return formatDate(value)
    }

    return value
  }

  getSelectedIds() {
    return Object.keys(this.state.selection).filter(key => this.state.selection[key])
  }

  isSelected(item: T) {
    return this.getSelectedIds().includes((item as any).id)
  }

  isExpanded(item: T) {
    return this.getExpandedIds().includes((item as any).id)
  }

  getExpandedIds() {
    return Object.keys(this.state.expanded).filter(key => this.state.expanded[key])
  }

  async selectAll() {
    const allSelected = this.getSelectedIds().length === this.state.items.length
    const selection = produce(this.state.selection, state => {
      Object.keys(state).forEach(key => state[key] = !allSelected)
    })
    await this.setState({ selection })
    const items = this.getSelectedIds().map(id => this.state.items.find((item) => (item as any).id === id)!)
    this.props.onSelectionChange(items)
  }

  renderFilter(column: Column<T>) {
    return <FilterRenderer
      column={column}
      filterState={this.state.filterStates[column.id]}
      onFilterStateChange={async (state, fetch) => {
        const filterStates = produce(this.state.filterStates, (states) => {
          states[column.id] = state
        })

        await this.setState({ filterStates })

        if (fetch) {
          await this.fetch()
        }
      }}
    />
  }

  renderEmptyCell(column: Column<T>, index: number) {
    const key = `data-table-item-empty-cell-${column.id}-${index}`
    return <Cell className={Classes.SKELETON} flex={column.flex} width={column.width} key={key}>
      &nbsp;
    </Cell>
  }

  renderCell(item: T, column: Column<T>, index: number) {
    if (!column.visible) {
      return null
    }

    const key = `data-table-item-cell-${column.id}-${index}`
    return <Cell
      flex={column.flex}
      width={column.width}
      key={key}
      onClick={() => this.props.onItemSelect(item)}
    >
      { this.formatValue(item, column) }
    </Cell>
  }

  renderEmpty() {
    const rows = []
    for (let i = 1; i < this.state.pageSize; i++) {
      rows.push(<ItemRow key={`data-table-empty-row-${i}`}>
        { this.state.columns.map((column) => this.renderEmptyCell(column, i)) }
      </ItemRow>)
    }

    return rows
  }

  renderItems() {
    return this.state.items.map((item, index) => {
      const cells = this.state.columns.map(column => this.renderCell(item, column, index))
      const _item = (item as any)
      if (this.props.multiple) {
        cells.splice(0, 0,
          <Cell
            width={30}
            key={`datatable-row-selection-${index}`}
          >
            <Checkbox
              style={{ justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }}
              className="datatable-item-selector"
              checked={this.state.selection[_item.id]}
              onChange={async (evt) => {
                const selection = produce(this.state.selection, state => {
                  state[_item.id] = evt.currentTarget.checked
                })
                await this.setState({ selection })
                this.props.onSelectionChange(this.state.items.filter((item: any) => Object.keys(selection).filter(key => selection[key]).includes(item.id)))
              }}
            />
          </Cell>)
      }

      if (this.props.expandable) {
        cells.splice(0, 0,
          <Cell
            width={36}
            key={`datatable-row-expand-${index}`}
          >
            <Button
              minimal
              icon={<Icon
                color={this.isExpanded(item) ? Colors.RED1 : Colors.GRAY5}
                icon={this.isExpanded(item) ? 'chevron-down' : 'chevron-right'}
              />}
              style={{ justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }}
              onClick={async (evt: any) => {
                const expanded = produce(this.state.expanded, state => {
                  if (typeof state[_item.id] === 'undefined') {
                    state[_item.id] = false
                  }

                  state[_item.id] = !state[_item.id]
                })
                await this.setState({ expanded })
              }}
            />
          </Cell>)
      }

      return <React.Fragment key={`data-table-item-row-${index}-fragment`}>
        <ItemRow key={`data-table-item-row-${index}`}>
          { cells }
        </ItemRow>

        { (this.props.expandable && this.isExpanded(item)) &&
          <ExpandedItemRow key={`data-table-expanded-row-${index}`}>
            { this.props.detailRenderer(item) }
          </ExpandedItemRow>
        }
      </React.Fragment>
    })
  }

  renderHeader() {
    const ClientColumnPicker = ColumnPicker.ofType<T>()

    const setSort = async (column: Column<T>) => {
      await this.setState({
        sort: column.id,
        sortDir: this.state.sort === column.id ? (this.state.sortDir === 'asc' ? 'desc' : 'asc') : 'asc'
      })
      await this.fetch()
    }

    const cells = this.state.columns.map(column => {
      if (!column.visible) {
        return null
      }

      return <Cell
        head={true}
        flex={column.flex}
        width={column.width}
        key={`datatable-header-${column.id}`}>
        <div style={{ flex: 3 }} onClick={() => {
          if (column.sortable) {
            setSort(column)
          }
        }}>
          <span>{ column.title }</span>
        </div>

        <div style={{ flex: 1, alignItems: 'flex-end', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          { column.sortable && <Button
            className={this.state.sort === column.id ? '' : 'visible-on-hover'}
            intent={this.state.sort === column.id ? 'primary' : 'none'}
            minimal={true}
            onClick={() => setSort(column)}
            icon={this.state.sort === column.id ? this.state.sortDir === 'asc' ? "chevron-up" : 'chevron-down' : 'chevron-up' }
          /> }

          { column.filterable && <Popover interactionKind={PopoverInteractionKind.CLICK} position={PopoverPosition.BOTTOM}>
            <Button
              minimal
              icon={<Icon color={this.state.filterStates[column.id].active ? Colors.RED1 : Colors.GRAY4} icon="filter" />}
              style={{ justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }}
            />
            { this.renderFilter(column) }
            </Popover>}
        </div>
      </Cell>
    })

    if (this.props.multiple) {
      cells.splice(0, 0,
        <Cell width={30} key={`datatable-header-selection`}>
          <Tooltip interactionKind={PopoverInteractionKind.HOVER} position={PopoverPosition.RIGHT}>
            <Checkbox
              checked={this.getSelectedIds().length === this.state.items.length}
              onChange={this.selectAll}
              style={{ justifySelf: 'center', alignSelf: 'center', marginBottom: 0 }}
            />
            Označiť všetky
          </Tooltip>
        </Cell>)
    }

    if (this.props.expandable) {
      cells.splice(0, 0, <Cell width={36} key={`datatable-header-expand`}>
        <ClientColumnPicker
          columns={this.state.columns}
          onChange={(column, visible) => {
            const columns = produce(this.state.columns, state => {
              const col = state.find(col => col.id === column.id)
              if (col) {
                col.visible = visible
              }
            })
            this.setState({ columns })
          }}
        />
      </Cell>)
    }

    return <Header>{ cells }</Header>
  }

  renderPagination() {
    return <Pagination
      page={this.state.page}
      size={this.state.pageSize}
      total={this.state.total}
      onChange={async (page, pageSize) => {
        await this.setState({ page, pageSize })
        await this.fetch()
      }}
    />
  }

  render() {
    return <Container>
      {this.renderHeader()}
      <Content>
        { this.state.loading && this.renderEmpty() }
        { !this.state.loading && this.renderItems() }
      </Content>
      <Toolbar>
        <FlexRow flex={1}>
          <Button minimal={true} icon="refresh" onClick={() => this.fetch()}/>
          { this.formatSelection() }
        </FlexRow>
        <FlexColumn flex={4}>
          { this.renderPagination() }
        </FlexColumn>
        <FlexColumn flex={1}>
          &nbsp;
        </FlexColumn>
      </Toolbar>
    </Container>
  }
}

