import React, { ReactElement } from 'react'
import { Button, ButtonGroup, Colors, MenuItem } from '@blueprintjs/core';
import styled from 'styled-components'
import { Select } from '@blueprintjs/select'

type PageSizeItem = { title: string, value: number }
const PageSizeSelect = Select.ofType<PageSizeItem>()

const PageSizes = [
  { title: '25 na stranu', value: 25 } as PageSizeItem,
  { title: '50 na stranu', value: 50 } as PageSizeItem,
  { title: '100 na stranu', value: 100 } as PageSizeItem,
  { title: '500 na stranu', value: 500 } as PageSizeItem,
  { title: '1000 na stranu', value: 1000 } as PageSizeItem
] as PageSizeItem[]

const Container = styled.div`
  text-align: center;
  height: 100%;
`

interface Props {
  page: number
  size: number
  total: number
  onChange: (page: number, size: number) => void
}

export default function Pagination({ page, size, total, onChange }: Props): ReactElement {
  const totalPages = Math.ceil(total / size);

  let startPage = 0
  let endPage = 0

  if (totalPages <= 10) {
    // less than 10 total pages so show all
    startPage = 1
    endPage = totalPages
  } else {
    // more than 10 total pages so calculate start and end pages
    if (page <= 6) {
      startPage = 1
      endPage = 10
    } else if (page + 4 >= totalPages) {
      startPage = totalPages - 9
      endPage = totalPages
    } else {
      startPage = page - 5
      endPage = page + 4
    }
  }

  const pages = Array.from(
    { length: endPage + 1 - startPage },
    (_, i) => startPage + i
  )

  return <Container>
    <ButtonGroup>
      <Button
        disabled={page === 1}
        minimal={true}
        onClick={() => onChange(1, size)}
      >
        Prvá
      </Button>
      <Button
        icon="chevron-left"
        disabled={page === 1}
        minimal={true}
        onClick={() => onChange(page, Math.max(1, page - 1))}
      />
      {pages.map(_page => (
        <Button
          key={_page}
          style={{ 
            color: page === _page ? Colors.BLUE1 : Colors.GRAY1,
            fontWeight: page === _page ? 'bold' : 'normal'
          }}
          minimal={true}
          onClick={() => onChange(_page, size)}
        >
          {_page}
        </Button>
      ))}
      <Button
        icon="chevron-right"
        disabled={page === totalPages}
        minimal={true}
        onClick={() =>
          onChange(Math.min(page + 1, totalPages), size)
        }
      />
      <Button
        disabled={page === totalPages}
        minimal={true}
        onClick={() => onChange(totalPages, size)}
      >
        Posledná
      </Button>
      <PageSizeSelect
        items={PageSizes}
        itemRenderer={(item, options) => <MenuItem key={`pagination-item-${item.value}`} text={item.title} onClick={options.handleClick}/>}
        onItemSelect={item => onChange(page, item.value)}
      >
        <Button minimal={true} rightIcon="chevron-down" text={`${size} na stranu`} style={{ margin: 0 }} className="low-button"/>
      </PageSizeSelect>
    </ButtonGroup>
  </Container>
}
