import React from "react"
import DataTable from './data-table'
import { ColumnType, FetchResponse } from '../types'

class TestModel {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

const TestTable = DataTable.ofType<TestModel>()

export default {
  title: "DataTable"
}

const items = []
for (let i = 0; i< 100; i++) { items.push(new TestModel(`${i}`, `Item #${i}`)) }

const fetch = async (page, pageSize, sort, sortDir, _filters) => {
  if (sortDir === 'asc') {
    items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0))
  } else {
    items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? -1 : ((b[sort] > a[sort]) ? 1 : 0))
  }

  //const filters = JSON.stringify(Object.keys(_filters).map(key => _filters[key]).filter(filter => filter.active))

  return {
    items: items.slice((page -1) * pageSize, page * pageSize),
    total: items.length
  } as FetchResponse<TestModel>
}

const baseProps = {
  expandable: false,
  sort: 'name',
  sortDir: 'asc' as 'asc' | 'desc',
  multiple: false,
  onItemSelect: (item) => {},
  onSelectionChange: (selection) => {},
  detailRenderer: () => <div/>,
  fetch,
  columns: [
    {
      id: 'id',
      title: 'ID',
      type: ColumnType.Text,
      visible: true,
      width: 150
    },
    {
      id: 'name',
      title: 'Meno',
      type: ColumnType.Text,
      visible: true,
      flex: 1
    }
  ]
}

export const SimpleTable = () => <TestTable { ...baseProps } />

export const Sortable = () => <TestTable { ...baseProps }
  columns={[
    {
      id: 'id',
      title: 'ID',
      type: ColumnType.Text,
      visible: true,
      width: 150,
      sortable: true
    },
    {
      id: 'name',
      title: 'Meno',
      type: ColumnType.Text,
      visible: true,
      flex: 1,
      sortable: true
    }
  ]}
  fetch={fetch}
/>
