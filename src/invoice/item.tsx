import React, { ReactElement } from 'react'
import { EditableText, InputGroup, NumericInput } from '@blueprintjs/core'
import { FlexColumn as Column, FlexRow as Row } from '../components'
import { InvoiceItemRow, InvoiceCurrency } from './components'
import InvoiceItem from '../models/invoice-item'

interface Props {
  item: InvoiceItem
  onChange: (item: InvoiceItem) => void
}

const rightAlign = {
  textAlign: 'right',
  justifyContent: 'flex-end'
} as React.CSSProperties

export default function InvoiceItemView({ item, onChange }: Props): ReactElement {
  const onNameChange = (value: string) => {
    const clone = new InvoiceItem(item)
    clone.item_name = value
    onChange(clone)
  }

  const onPriceChange = (value: number) => {
    const clone = new InvoiceItem(item)
    clone.unit_price = value
    clone.recalculate()
    onChange(clone)
  }

  const onLinePriceChange = (value: number) => {
    const clone = new InvoiceItem(item)
    clone.line_price = value
    clone.unit_price = value / clone.quantity
    clone.recalculate()
    onChange(clone)
  }

  const onQuantityChange = (value: number) => {
    const clone = new InvoiceItem(item)
    clone.quantity = value
    clone.recalculate()
    onChange(clone)
  }

  const onVatChange = (value: number) => {
    const clone = new InvoiceItem(item)
    clone.vat = value
    clone.recalculate()
    onChange(clone)
  }

  return <InvoiceItemRow key={`invoice-item-${item.index}`}>
    <Row flex={2} style={{ textAlign: 'left', fontSize: 14 }}>
      <InputGroup
        fill
        placeholder="Editovať"
        value={item.item_name}
        onChange={(evt: any) => onNameChange(evt.currentTarget.value)}
        name="name"
      />
    </Row>

    <Row flex={1} style={{...rightAlign, alignItems: 'center'}}>
      <NumericInput
        fill
        buttonPosition="none"
        className="align-right"
        placeholder="Editovať"
        value={item.unit_price}
        onValueChange={onPriceChange}
      />
      <InvoiceCurrency>EUR</InvoiceCurrency>
    </Row>

    <Row flex={1} style={{...rightAlign, alignItems: 'center'}}>
      <NumericInput
        fill
        buttonPosition="none"
        className="align-right"
        placeholder="Editovať"
        value={item.quantity}
        onValueChange={onQuantityChange}
      />
      <InvoiceCurrency>{ item.unit_code || 'ks' }</InvoiceCurrency>
    </Row>

    <Row flex={1} style={{...rightAlign, alignItems: 'center'}}>
      <NumericInput
        fill
        buttonPosition="none"
        className="align-right"
        placeholder="Editovať"
        value={item.line_price}
        onValueChange={onLinePriceChange}
      />
      <InvoiceCurrency>EUR</InvoiceCurrency>
    </Row>

    <Row flex={1} style={{...rightAlign, alignItems: 'center'}}>
      <NumericInput
        fill
        buttonPosition="none"
        className="align-right"
        placeholder="Editovať"
        value={item.vat}
        onValueChange={onVatChange}
      />
      <InvoiceCurrency>%</InvoiceCurrency>
    </Row>

    <Row flex={1} style={{...rightAlign, alignItems: 'center'}}>
      <EditableText
        className="align-right"
        placeholder="Editovať"
        value={`${item.vat_price.toFixed(2)}`}
      />
      <InvoiceCurrency>EUR</InvoiceCurrency>
    </Row>

    <Row flex={1} style={{...rightAlign, alignItems: 'center'}}>
      <EditableText
        className="align-right"
        placeholder="Editovať"
        value={`${item.price_with_vat.toFixed(2)}`}
      />
      <InvoiceCurrency>EUR</InvoiceCurrency>
    </Row>
  </InvoiceItemRow>
}
