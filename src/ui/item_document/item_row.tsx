import React, { ReactElement } from 'react'
import { EditableText, InputGroup, NumericInput } from '@blueprintjs/core'
import { FlexColumn as Column, FlexRow as Row } from '../../components'
import { ItemDocumentItemRow, ItemDocumentCurrency } from './components'
import DocumentItem from '../../models/document_item'
import PatternApp from '../../pattern_app'
import { t } from '../../locale_manager'
import { Currency } from '../../models'

interface Props {
  currency: Currency
  item: DocumentItem
  onChange: (item: DocumentItem) => void
  showVat: boolean
}

const rightAlign = {
  textAlign: 'right',
  justifyContent: 'flex-end'
} as React.CSSProperties

const rightRowProps = {
  flex: 2,
  style: {...rightAlign, alignItems: 'center'}
}

export default function InvoiceItemView({ currency, item, onChange, showVat }: Props): ReactElement {
  const onCodeChange = (value: string) => {
    const clone = new DocumentItem(item.clone)
    clone.code = value
    onChange(clone)
  }

  const onNameChange = (value: string) => {
    const clone = new DocumentItem(item.clone)
    clone.name = value
    onChange(clone)
  }

  const onPriceChange = (value: number) => {
    const clone = new DocumentItem(item.clone)
    clone.price = value
    clone.recalculate()
    onChange(clone)
  }

  const onLinePriceChange = (value: number) => {
    const clone = new DocumentItem(item)
    clone.linePrice = value
    clone.price = value / clone.quantity
    clone.recalculate()
    onChange(clone)
  }

  const onQuantityChange = (value: number) => {
    const clone = new DocumentItem(item)
    clone.quantity = value
    clone.recalculate()
    onChange(clone)
  }

  const onVatChange = (value: number) => {
    const clone = new DocumentItem(item)
    clone.vat = value
    clone.recalculate()
    onChange(clone)
  }
  
  return <Column flex={1}>
    <ItemDocumentItemRow key={`invoice-item-${item.index}`}>
      <Row flex={6}>
        <InputGroup
          fill
          placeholder={t('edit')}
          value={item.name}
          onChange={(evt: any) => onNameChange(evt.currentTarget.value)}
          name="name"
        />
      </Row>

      <Row {...rightRowProps} flex={3}>
        <NumericInput
          fill
          buttonPosition="none"
          className="align-right"
          placeholder={t('edit')}
          value={item.price}
          onValueChange={onPriceChange}
        />
        <ItemDocumentCurrency>{ currency.symbol }</ItemDocumentCurrency>
      </Row>

      <Row {...rightRowProps}>
        <NumericInput
          fill
          buttonPosition="none"
          className="align-right"
          placeholder={t('edit')}
          value={item.quantity}
          onValueChange={onQuantityChange}
        />
        <ItemDocumentCurrency>{ item.unit || 'ks' }</ItemDocumentCurrency>
      </Row>

      <Row {...rightRowProps} flex={3}>
        <NumericInput
          fill
          buttonPosition="none"
          className="align-right"
          placeholder={t('edit')}
          value={item.linePrice}
          onValueChange={onLinePriceChange}
        />
        <ItemDocumentCurrency>{ currency.symbol }</ItemDocumentCurrency>
      </Row>

      { showVat && 
        <React.Fragment>
          <Row {...rightRowProps } flex={2}>
            <NumericInput
              fill
              buttonPosition="none"
              className="align-right"
              placeholder={t('edit')}
              value={item.vat}
              onValueChange={onVatChange}
            />
            <ItemDocumentCurrency>%</ItemDocumentCurrency>
          </Row>

          <Row {...rightRowProps} flex={2}>
            <EditableText
              disabled={true}
              className="align-right"
              placeholder={t('edit')}
              value={`${PatternApp.settings.format.price(item.vatPrice)}`}
            />
            <ItemDocumentCurrency>{ currency.symbol }</ItemDocumentCurrency>
          </Row>

          <Row {...rightRowProps} flex={3}>
            <EditableText
              disabled={true}
              className="align-right"
              placeholder={t('edit')}
              value={`${PatternApp.settings.format.price(item.linePriceWithVat)}`}
            />
            <ItemDocumentCurrency>{ currency.symbol }</ItemDocumentCurrency>
          </Row>
        </React.Fragment>
      }
    </ItemDocumentItemRow>
    
    <ItemDocumentItemRow key={`invoice-item-code-${item.index}`}>
      <Row flex={5}>
        <InputGroup
          fill
          placeholder={t('edit_code')}
          value={item.code}
          onChange={(evt: any) => onCodeChange(evt.currentTarget.value)}
          name="code"
        />
      </Row>
      <Row flex={12}>
      </Row>
    </ItemDocumentItemRow>
  </Column>
}
