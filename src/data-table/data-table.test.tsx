import React from "react"
import { shallow } from "enzyme"

import DataTable from "./data-table"
import { Column, ColumnType, FilterStates } from './types'

class TestModel {
  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

const TestTable = DataTable.ofType<TestModel>()



const items = [
  new TestModel("yolo1", "yolo 1"),
  new TestModel("yolo2", "yolo 2"),
  new TestModel("yolo3", "yolo 3"),
]

describe("DataTable", () => {
  let props: any

  beforeEach(() => {
    props = {
      expandable: false,
      sort: 'name',
      sortDir: 'asc',
      multiple: false,
      fetch: async (page: number, pageSize: number, sort: string, sortDir: 'asc' | 'desc', filters: FilterStates) => {
        return await new Promise((resolve, reject) => {
          resolve({ items, total: 0 })
        })
      },
      items: [],
      theme: "primary",
      columns: [
        {
          id: 'name',
          title: 'Meno',
          type: ColumnType.Text,
          format: (item: TestModel) => <span>{ item.name }</span>,
          sortable: true,
          filterable: true,
          visible: true
        },
      ] as Column<TestModel>[]
    }
  })

  const renderWrapper = () => shallow(<TestTable {...props} />)

  describe("Snapshots", () => {
    it("should match snapshots as primary themed", () => {
      expect(renderWrapper()).toMatchSnapshot()
    })
  })
})
