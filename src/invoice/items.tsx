import React from 'react'
import { Button, ButtonGroup, Popover, PopoverInteractionKind, PopoverPosition } from '@blueprintjs/core'
import Invoice from '../models/invoice'
import InvoiceItem from '../models/invoice-item'
import { FlexColumn as Column, FlexRow as Row } from '../components'
import { InvoiceTableHeader, InvoiceItemsContainer, InvoiceItemsHeaderRow } from './components'
import InvoiceItemView from './item'

interface Props {
  invoice: Invoice
  onChange: (invoice: Invoice) => void
}

export default function InvoiceItems({invoice, onChange}: Props): React.ReactElement {
  const change = (item: InvoiceItem) => {
    const clone = new Invoice(invoice)
    clone.items.splice(item.index, 1, item)
    onChange(clone)
  }

  const trash = (item: InvoiceItem) => {
    const clone = new Invoice(invoice)
    clone.items.splice(item.index, 1)
    onChange(clone)
  }

  const duplicate = (item: InvoiceItem) => {
    const clone = new Invoice(invoice)
    clone.items.splice(item.index, 0, item.clone)
    clone.items.forEach((item, index) => item.index = index)
    onChange(clone)
  }

  return <InvoiceItemsContainer>
    <InvoiceItemsHeaderRow>
      <Column flex={2}>
        <InvoiceTableHeader>NÁZOV</InvoiceTableHeader>
      </Column>
      <Column flex={1}>
        <InvoiceTableHeader align="right">JEDN. CENA BEZ DPH</InvoiceTableHeader>
      </Column>
      <Column flex={1}>
        <InvoiceTableHeader align="right">MNOŽSTVO</InvoiceTableHeader>
      </Column>
      <Column flex={1}>
        <InvoiceTableHeader align="right">CELKOM BEZ DPH</InvoiceTableHeader>
      </Column>
      <Column flex={1}>
        <InvoiceTableHeader align="right">DPH</InvoiceTableHeader>
      </Column>
      <Column flex={1}>
        <InvoiceTableHeader align="right">HODNOTA DPH</InvoiceTableHeader>
      </Column>
      <Column flex={1}>
        <InvoiceTableHeader align="right">HODNOTA S DPH</InvoiceTableHeader>
      </Column>
    </InvoiceItemsHeaderRow>
    { invoice.items.map((item, index) => <div key={`invoice-item-${index}`} style={{ flex: 1 }}>
      <Popover
        key={`invoice-item-${index}`}
        interactionKind={PopoverInteractionKind.HOVER}
        position={PopoverPosition.RIGHT}>
        <InvoiceItemView
          item={item}
          onChange={(item) => change(item)}
        />
        <ButtonGroup>
          <Button
            minimal
            intent="danger"
            icon="trash"
            onClick={() => trash(item)}
          />
          <Button
            minimal
            intent="none"
            icon="duplicate"
            onClick={() => duplicate(item)}
          />
        </ButtonGroup>
      </Popover>
    </div> )}
  </InvoiceItemsContainer>
}
