import React, { ReactElement } from 'react'
import { Button, ButtonGroup, Colors, MenuItem } from '@blueprintjs/core'
import { Select } from '@blueprintjs/select'
import { PageSizeItem } from '../types'
import { t } from '../locale-manager'

const PageSizeSelect = Select.ofType<PageSizeItem>()

interface Props {
  page: number
  size: number
  total: number
  onChange: (page: number, size: number) => void
}

export default function Pagination({ page, size, total, onChange }: Props): ReactElement {
  const pageSizes = [ 25, 50, 100, 500 ].map(size => ({ title: `${size} ${t('per_page')}`, value: size } as PageSizeItem))
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

  return <div className="patterns-data-table-pagination">
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
        items={pageSizes}
        itemRenderer={(item, options) => <MenuItem key={`pagination-item-${item.value}`} text={item.title} onClick={options.handleClick}/>}
        onItemSelect={item => onChange(page, item.value)}
      >
        <Button minimal={true} rightIcon="chevron-down" text={`${size} ${t('per_page')}`} style={{ margin: 0 }} className="low-button"/>
      </PageSizeSelect>
    </ButtonGroup>
  </div>
}
