import React, { ReactElement } from 'react'
import { EditableText, InputGroup, NumericInput } from '@blueprintjs/core'
import { FlexColumn as Column, FlexRow as Row } from '../../components'
import { ItemDocumentItemRow, ItemDocumentCurrency } from './components'
import bigDecimal from 'js-big-decimal'
import DocumentItem from '../../models/document_item'
import PatternApp from '../../pattern_app'

import { t } from '../../locale_manager'
import { Currency } from '../../models'

interface Props {
  editableCode: boolean
  currency: Currency
  item: DocumentItem
  onChange: (item: DocumentItem) => void
  showVat: boolean
  free?: boolean
}

const rightAlign = {
  textAlign: 'right',
  justifyContent: 'flex-end'
} as React.CSSProperties

const rightRowProps = {
  flex: 2,
  style: {...rightAlign, alignItems: 'center'}
}

export default function InvoiceItemView({ currency, editableCode, item, onChange, showVat, free = false }: Props): ReactElement {
  const onCustomChange = (value: string, field: 'custom1' | 'custom2' | 'custom3' | 'custom4') => {
    const clone = new DocumentItem(item.clone)
    clone[field] = value
    onChange(clone)
  }

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
    clone.price = new bigDecimal(value)
    clone.recalculate()
    onChange(clone)
    console.log('price changed', clone)
  }

  const onPriceWithVatChange = (value: number) => {
    item.unitPriceWithVat = new bigDecimal(value)
    console.log('priceWithVatChange', value, item.unitPriceWithVat)
    const price = item.unitPriceWithVat.divide(new bigDecimal((item.vat / 100) + 1), 3)
    console.log('price with vat changed', price)
    onPriceChange(parseFloat(price.getValue()))
    // onLinePriceWithVatChange(parseFloat(price.getValue()) * item.quantity)
    // clone.recalculate()
    // onChange(clone)
  }

  const onLinePriceChange = (value: number, valueString: string, skipVat: boolean = false, totalWithVat?: bigDecimal) => {
    const bigValue = new bigDecimal(value)
    const clone = new DocumentItem(item)
    clone.linePrice = new bigDecimal(value).round(2)
    if (clone.quantity > 0) {
      clone.price = bigValue.divide(new bigDecimal(clone.quantity), 3)
    }
    if (totalWithVat) {
      clone.linePriceWithVat = totalWithVat
    }
    clone.unitPriceWithVat = clone.price.multiply(new bigDecimal(clone.vat / 100 + 1)).round(2)

    clone.recalculate(skipVat)
    onChange(clone)
  }

  const onQuantityChange = (value: number) => {
    const clone = new DocumentItem(item)
    clone.quantity = value
    clone.recalculate()
    if (clone.quantity > 0) {
      clone.price = clone.linePrice.divide(new bigDecimal(clone.quantity), 3)
    }
    onChange(clone)
  }

  const onVatChange = (value: number) => {
    const clone = new DocumentItem(item)
    clone.vat = value
    clone.recalculate()
    onChange(clone)
  }

  const onLinePriceWithVatChange = async (value: number) => {
    const bigValue = new bigDecimal(value)
    const linePrice = bigValue.divide(new bigDecimal(item.vat / 100 + 1), 6).round(2)
    onLinePriceChange(parseFloat(linePrice.getValue()), linePrice.getValue(), true, bigValue)
  }

  console.log('row with free', free)

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

      { !free && <React.Fragment>
        <Row {...rightRowProps} flex={2}>
          <NumericInput
            fill
            buttonPosition="none"
            className={`align-right ${item.vatTotalOnly ? 'faded' : ''}`}
            placeholder={t('edit')}
            value={item.price.getValue()}
            onValueChange={onPriceChange}
            disabled={item.vatTotalOnly}
          />
          <ItemDocumentCurrency style={{ opacity: item.vatTotalOnly ? 0.15 : 1 }}>{ currency.symbol }</ItemDocumentCurrency>
        </Row>

        <Row {...rightRowProps} flex={2}>
          <NumericInput
            fill
            buttonPosition="none"
            placeholder={t('edit')}
            value={item.unitPriceWithVat.getValue()}
            onValueChange={onPriceWithVatChange}
          />
          <ItemDocumentCurrency style={{ opacity: item.vatTotalOnly ? 0.15 : 1 }}>{ currency.symbol }</ItemDocumentCurrency>
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
            className={`align-right ${item.vatTotalOnly ? 'faded' : ''}`}
            placeholder={t('edit')}
            value={item.linePrice.getValue()}
            onValueChange={onLinePriceChange}
            disabled={item.vatTotalOnly}
          />
          <ItemDocumentCurrency style={{ opacity: item.vatTotalOnly ? 0.15 : 1 }}>{ currency.symbol }</ItemDocumentCurrency>
        </Row>
      </React.Fragment> }

      { !free && showVat &&
        <React.Fragment>
          <Row {...rightRowProps } flex={2}>
            <NumericInput
              fill
              buttonPosition="none"
              className={`align-right ${item.vatTotalOnly ? 'faded' : ''}`}
              placeholder={t('edit')}
              value={item.vat}
              onValueChange={onVatChange}
              disabled={item.vatTotalOnly}
            />
            <ItemDocumentCurrency style={{ opacity: item.vatTotalOnly ? 0.15 : 1 }}>%</ItemDocumentCurrency>
          </Row>

          <Row {...rightRowProps} flex={2}>
            <EditableText
              disabled={true}
              className={`align-right ${item.vatTotalOnly ? 'faded' : ''}`}
              placeholder={t('edit')}
              value={`${PatternApp.settings.format.price(parseFloat(item.vatPrice.getValue()))}`}
            />
            <ItemDocumentCurrency style={{ opacity: item.vatTotalOnly ? 0.15 : 1 }}>{ currency.symbol }</ItemDocumentCurrency>
          </Row>
        </React.Fragment>
      }

      { free && <React.Fragment>
        <Row {...rightRowProps} flex={2}>
          <InputGroup
            fill
            placeholder={t('edit')}
            value={item.custom1}
            onChange={evt => onCustomChange(evt.currentTarget.value, 'custom1')}
          />
        </Row>

        <Row flex={3}>
          <InputGroup
            fill
            placeholder={t('edit')}
            value={item.custom2}
            onChange={evt => onCustomChange(evt.currentTarget.value, 'custom2')}
          />
        </Row>

        <Row {...rightRowProps} flex={2}>
          <InputGroup
            fill
            placeholder={t('edit')}
            value={item.custom3}
            onChange={evt => onCustomChange(evt.currentTarget.value, 'custom3')}
          />
        </Row>

        <Row {...rightRowProps}>
          <InputGroup
            fill
            className="align-right"
            placeholder={t('edit')}
            value={item.custom4}
            onChange={evt => onCustomChange(evt.currentTarget.value, 'custom4')}
          />
        </Row>
      </React.Fragment>}
      <Row {...rightRowProps} flex={3}>
        <NumericInput
          fill
          buttonPosition="none"
          className="align-right"
          placeholder={t('edit')}
          value={item.linePriceWithVat.getValue()}
          onValueChange={onLinePriceWithVatChange}
        />
        <ItemDocumentCurrency>{ currency.symbol }</ItemDocumentCurrency>
      </Row>
    </ItemDocumentItemRow>

    { editableCode && <ItemDocumentItemRow key={`invoice-item-code-${item.index}`}>
      <Row flex={5}>
        <InputGroup
          fill
          placeholder={t('edit_code')}
          value={item.code}
          onChange={(evt: any) => onCodeChange(evt.currentTarget.value)}
          name="code"
        />
      </Row>
      <Row flex={12}/>
    </ItemDocumentItemRow> }
  </Column>
}
