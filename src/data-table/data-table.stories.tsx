import React from "react"
import DataTable from './data-table'
import { Alignment, ColumnType, FetchResponse } from '../types'
import faker from 'faker'
import _ from 'lodash'
import { formatDate, parseDate } from '../common'

class TestModel {
  id: string
  name: string
  email: string
  address: string
  revenue: number
  registration_date: Date

  constructor(id: string, name: string, email: string, address: string, revenue: number, registration_date: Date) {
    this.id = id
    this.name = name
    this.email = email
    this.address = address
    this.revenue = revenue
    this.registration_date = registration_date
  }
}

const TestTable = DataTable.ofType<TestModel>()

export default {
  title: "DataTable"
}

const items = []
for (let i = 0; i< 1234; i++) { items.push(
  new TestModel(
    `${i}`,
    faker.name.findName(),
    faker.internet.email(),
    `${faker.address.city()}, ${faker.address.country()}`,
    parseFloat(faker.finance.amount()),
    faker.date.past()
  )
)}

const fetch = async (page, pageSize, sort, sortDir, _filters) => {
  // if (sortDir === 'asc') {
  //   items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? 1 : ((b[sort] > a[sort]) ? -1 : 0))
  // } else {
  //   items.sort((a: TestModel,b: TestModel) => (a[sort] > b[sort]) ? -1 : ((b[sort] > a[sort]) ? 1 : 0))
  // }

  //const filters = JSON.stringify(Object.keys(_filters).map(key => _filters[key]).filter(filter => filter.active))

  return {
    items: _.orderBy(items, [ sort ], [ sortDir ]).slice((page -1) * pageSize, page * pageSize),
    total: items.length
  } as FetchResponse<TestModel>
}

const baseProps = {
  sort: 'name',
  sortDir: 'asc' as 'asc' | 'desc',
  multiple: true,
  expandable: true,
  formatDate,
  parseDate,
  onItemSelect: (item) => {},
  onSelectionChange: (selection) => {},
  detailRenderer: () => <div style={{ padding: 12 }}>Custom React Component to show item details</div>,
  fetch,
  columns: [
    {
      id: 'id',
      title: 'ID',
      type: ColumnType.Text,
      visible: true,
      width: 60
    },
    {
      id: 'name',
      title: 'Name',
      type: ColumnType.Text,
      visible: true,
      flex: 1,
      filterable: true,
      sortable: true
    },
    {
      id: 'email',
      title: 'Email',
      type: ColumnType.Text,
      visible: true,
      flex: 1,
      filterable: true,
      sortable: true
    },
    {
      id: 'address',
      title: 'Address',
      type: ColumnType.Text,
      visible: true,
      flex: 1,
      filterable: true,
      sortable: true
    },
    {
      id: 'revenue',
      title: 'Revenue',
      type: ColumnType.Number,
      visible: true,
      width: 130,
      alignment: Alignment.Right,
      filterable: true,
      sortable: true,
      format: (item: TestModel) => <span>{ item.revenue.toFixed(2) } €}</span>
    },
    {
      id: 'registration_date',
      title: 'Registration Date',
      type: ColumnType.Date,
      visible: true,
      width: 180,
      alignment: Alignment.Right,
      filterable: true,
      sortable: true
    }
  ]
}

interface Props { style: React.CSSProperties }
const Container = ({ children, style }: React.PropsWithChildren<Props>) =>
  React.createElement('div', { style }, children)

const style = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
} as React.CSSProperties

export const AllFeatures = () => <Container style={style}><TestTable { ...baseProps } /></Container>

export const Sortable = () => <Container style={style}><TestTable { ...baseProps }
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
/></Container>
