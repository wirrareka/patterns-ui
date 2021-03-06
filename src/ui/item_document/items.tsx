import React from 'react'
import { Button, ButtonGroup, Popover, PopoverInteractionKind, PopoverPosition } from '@blueprintjs/core'
import { FlexColumn as Column } from '../../components'
import { ItemDocumentTableHeader, ItemDocumentItemsContainer, ItemDocumentItemsHeaderRow } from './components'
import ItemRow from './item_row'
import { ItemDocument } from '../../models'
import DocumentItem from '../../models/document_item'
import { t } from '../../locale_manager'
import PatternApp from '../../pattern_app'

interface Props<T> {
  free?: boolean
  document: T
  editableCode: boolean
  onChange: (items: DocumentItem[]) => void
  showVat: boolean
}

export default class DocumentItemsView<T extends ItemDocument> extends React.Component<Props<T>> {
  state = {}

  public static ofType<T extends ItemDocument>() {
    return DocumentItemsView as new (props: Props<T>) => DocumentItemsView<T>
  }

  constructor(props: Props<T>) {
    super(props)
    this.change = this.change.bind(this)
  }

  change(item: DocumentItem) {
    const items = this.props.document.items.map(item => new DocumentItem(item.clone))
    items.splice(item.index, 1, item)
    // reindex
    items.forEach((item, index) => item.index = index)
    this.props.onChange(items)
  }

  trash(item: DocumentItem) {
    const items = this.props.document.items.map(item => new DocumentItem(item.clone))
    console.log('trashing item with index', item.index)
    items.splice(item.index, 1)
    this.props.onChange(items)
  }

  duplicate(item: DocumentItem) {
    const items = this.props.document.items.map(item => new DocumentItem(item.clone))
    items.splice(item.index, 0, item.clone)
    items.forEach((item, index) => item.index = index)
    this.props.onChange(items)
  }

  lock(item: DocumentItem) {
    item.vatTotalOnly = !item.vatTotalOnly
    this.change(item)
  }

  renderItems() {
    const currency = PatternApp.getCurrency(this.props.document.currency)

    return this.props.document.items.map((item, index) =>
      <div key={`item-document-item-${index}`} style={{ flex: 1 }}>
        <Popover
          key={`document-item-popover-${index}`}
          interactionKind={PopoverInteractionKind.HOVER}
          position={PopoverPosition.RIGHT}>
          <ItemRow
            free={this.props.free || false}
            currency={currency}
            editableCode={this.props.editableCode}
            item={item}
            onChange={this.change}
            showVat={this.props.showVat}
          />
          <ButtonGroup>
            <Button
              minimal
              intent="none"
              icon={item.vatTotalOnly ? "unlock" : "lock"}
              onClick={() => this.lock(item)}
            />
            <Button
              minimal
              intent="danger"
              icon="trash"
              onClick={() => this.trash(item)}
            />
            <Button
              minimal
              intent="none"
              icon="duplicate"
              onClick={() => this.duplicate(item)}
            />
          </ButtonGroup>
        </Popover>
      </div>
    )
  }

  render() {

    return <ItemDocumentItemsContainer>
      <ItemDocumentItemsHeaderRow>
        <Column flex={6}>
          <ItemDocumentTableHeader>{t('title')} / {t('code')}</ItemDocumentTableHeader>
        </Column>
        { !this.props.free && <React.Fragment>
          <Column flex={2}>
            <ItemDocumentTableHeader align="right">{t('unitPriceNoVat')}</ItemDocumentTableHeader>
          </Column>
          <Column flex={2}>
            <ItemDocumentTableHeader align="right">{t('unitPriceWithVat')}</ItemDocumentTableHeader>
          </Column>
          <Column flex={2}>
            <ItemDocumentTableHeader align="right">{t('quantity')}</ItemDocumentTableHeader>
          </Column>
          <Column flex={3}>
            <ItemDocumentTableHeader align="right">{t('linePriceNoVat')}</ItemDocumentTableHeader>
          </Column>
        </React.Fragment> }

        { !this.props.free && this.props.showVat &&
          <React.Fragment>
            <Column flex={2}>
              <ItemDocumentTableHeader align="right">{t('vat')}</ItemDocumentTableHeader>
            </Column>
            <Column flex={2}>
              <ItemDocumentTableHeader align="right">{t('vatPrice')}</ItemDocumentTableHeader>
            </Column>
            <Column flex={3}>
              <ItemDocumentTableHeader align="right">{t('linePriceWithVat')}</ItemDocumentTableHeader>
            </Column>
          </React.Fragment>
        }

        { this.props.free && <React.Fragment>
          <Column flex={2}>
            <ItemDocumentTableHeader align="right"></ItemDocumentTableHeader>
          </Column>
          <Column flex={3}>
            <ItemDocumentTableHeader align="right"></ItemDocumentTableHeader>
          </Column>
          <Column flex={2}>
            <ItemDocumentTableHeader align="right"></ItemDocumentTableHeader>
          </Column>
          <Column flex={3}>
            <ItemDocumentTableHeader align="right">{t('linePriceWithVat')}</ItemDocumentTableHeader>
          </Column>
        </React.Fragment> }
      </ItemDocumentItemsHeaderRow>
      { this.renderItems() }
    </ItemDocumentItemsContainer>
  }
}
