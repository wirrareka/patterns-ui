import React from "react"
import DataTable, { Column, ColumnType, FetchResponse } from './data-table'

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

const items = [
  new TestModel("yolo1", "yolo 1"),
  new TestModel("yolo2", "yolo 2"),
  new TestModel("yolo3", "yolo 3"),
]

const baseProps = {
  expandable: false,
  sort: 'name',
  sortDir: 'asc' as 'asc' | 'desc',
  multiple: false,
  onItemSelect: (item) => {},
  onSelectionChange: (selection) => {},
  detailRenderer: () => <div/>,
  fetch: async (page, pageSize, sort, sortDir, filters) => {
    return { items, total: items.length } as FetchResponse<TestModel>
  },
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
  fetch={async (page, pageSize, sort, sortDir, filters) => {
    console.log('before sort', items)
    if (sortDir === 'asc') {
      items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0))
    } else {
      items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? -1 : ((b[sort] > a[sort]) ? 1 : 0))
    }
    console.log('after sort', items)

    return { items, total: items.length } as FetchResponse<TestModel>
  }}
/>
