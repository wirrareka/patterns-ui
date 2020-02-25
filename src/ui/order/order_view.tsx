import React, { Component } from 'react'
import { Button, Colors, FormGroup, MenuItem, TextArea, ControlGroup } from '@blueprintjs/core'
import { DateInput } from '@blueprintjs/datetime'
import { Select } from '@blueprintjs/select'
import '../item_document/item_document.scss'

import PatternApp from '../../pattern_app'
import { Wrapper, Page, Header, Logo, HeaderCode, DocumentType } from '../item_document/components'
import { t } from '../../locale_manager'
import { Contact, Currency, DocumentItem, Order, PaymentMethod } from '../../models'
import { FlexColumn as Column, FlexRow as Row } from '../../components'

import ItemsView from '../item_document/items'
import ContactForm from '../item_document/contact_form'

const PaymentMethodSelect = Select.ofType<PaymentMethod>()
const OrderItemsView = ItemsView.ofType<Order>()

export interface Props {
  document: Order
  logo?: string
  onChange: <K extends keyof Order>(property: K, value: Order[K]) => void
  fetch: (query: string) => Promise<Contact[]>
}


export default class OrderView extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  renderVatRecap(currency: Currency) {
    const header = this.props.document.vats.length > 0 ? 
      <Row flex={1} style={{ paddingTop: 24 }}>
        <Column flex={4}></Column>
        <Column flex={2} className="patterns-item-document-header-column">{t('vatRecap')}</Column>
        <Column flex={1} className="patterns-item-document-header-column bordered">{t('vat')}</Column>
        <Column flex={1} className="patterns-item-document-header-column bordered">{t('vatBase')}</Column>
        <Column flex={2} className="patterns-item-document-header-column bordered">{t('vatValue')}</Column>
      </Row>
      :
      null

    const rows = this.props.document.vats.map((vat, index) => 
      <Row key={`invoice-vat-${index}`} flex={1} style={{ height: 24, alignItems: 'center' }}>
        <Column flex={6}></Column>
        <Column style={{ textAlign: 'right' }} flex={1}>{ vat.vat }%</Column>
        <Column style={{ textAlign: 'right' }} flex={1}>{ PatternApp.format.price(vat.base, currency) }</Column>
        <Column style={{ textAlign: 'right' }} flex={2}>{ PatternApp.format.price(vat.price, currency) }</Column>
      </Row>
    )

    return <React.Fragment>
      { header }
      { rows }
    </React.Fragment>
  }

  renderTotal(currency: Currency) {
    return <Row flex={1} style={{ height: 42, alignItems: 'center' }}>
      <Column flex={4}></Column>
      <Column flex={2} className="patterns-item-document-header-column">{t('total')}</Column>
      <Column flex={4} className="patterns-item-document-total">
        { PatternApp.format.price(PatternApp.settings.orders.showVat ? this.props.document.itemsTotalWithVat : this.props.document.itemsTotal, currency) }
      </Column>
    </Row>
  }

  render() {
    const paymentMethod = PatternApp.getPaymentMethod(this.props.document.paymentMethod)
    const currency = PatternApp.getCurrency(this.props.document.currency)

    return <Wrapper>
      <Page>
        <Header>
          <Logo>
            { this.props.logo && <img alt="logo" src={this.props.logo}/> }
          </Logo>
          <Column style={{ flex: 1 }}>
            <HeaderCode>{ this.props.document.code || t('order.new') }</HeaderCode>
            <DocumentType>{ t('order.type') }</DocumentType>
          </Column>
        </Header>
        <Row style={{ alignItems: 'flex-start' }}>
          <Column flex={1} style={{ height: '100%', marginRight: 30 }}>
            Obchodný register OS Trnava Oddiel Sro, vložka č. 34375/T
          </Column>
          <ContactForm
            key="address-vendor"
            disabled={true}
            header={t('vendor')}
            contact={this.props.document.vendor}
            onChange={(property, value) => {
              const contact = new Contact(this.props.document.vendor.clone)
              contact[property] = value
              this.props.onChange('vendor', contact)
            }}
            onReplace={contactable => this.props.onChange('vendor', contactable)}
            fetch={this.props.fetch}
          />
          <ContactForm
            key="address-customer"
            header={t('customer')}
            contact={this.props.document.customer}
            onChange={(property, value) => {
              const contact = new Contact(this.props.document.customer.clone)
              contact[property] = value
              this.props.onChange('customer', contact)
            }}
            onReplace={contact => this.props.onChange('customer', contact)}
            fetch={this.props.fetch}
          />
        </Row>

        <Row className="patterns-item-document-dates">
          <Row flex={1} className="patterns-item-document-dates-column" style={{ marginRight: 30 }}>
            <Column flex={1}>
              <Row className="patterns-item-document-detail">{ t('datePosted') }</Row>
              <Row className="patterns-item-document-detail">{ t('dateDelivered') }</Row>
              {/* <Row style={{ height: 24, alignItems: 'center' }}>{ t('dateDue') }</Row> */}
            </Column>
          </Row>
          <Row flex={2} className="patterns-item-document-dates-column">
            <Column style={{ marginLeft: 5, fontWeight: 'bold' }}>
              <DateInput
                formatDate={PatternApp.format.date}
                parseDate={PatternApp.format.parseDate}
                value={this.props.document.createdAt}
                onChange={date => this.props.onChange('createdAt', date)}
              />
              <DateInput
                formatDate={PatternApp.format.date}
                parseDate={PatternApp.format.parseDate}
                value={this.props.document.deliveryDate}
                onChange={date => this.props.onChange('deliveryDate', date)}
              />
              {/* <DateInput
                formatDate={this.props.formatDate}
                parseDate={this.props.parseDate}
                value={this.props.document.due}
              /> */}
            </Column>
          </Row>
          <Row flex={2} className="patterns-item-document-dates-column" style={{ marginLeft: 5 }}>
            <Column flex={1}>
              <Row className="patterns-item-document-detail-select">
                { t('paymentMethod') }
              </Row>
              { paymentMethod.code === PaymentMethod.bankTransfer.code && 
                <React.Fragment>
                  <Row className="patterns-item-document-detail">
                    { t('bank') }
                  </Row>
                  <Row className="patterns-item-document-detail">
                    { t('bankAccount') }
                  </Row>
                  <Row className="patterns-item-document-detail">
                    { t('variableSymbol') }
                  </Row>
                  <Row className="patterns-item-document-detail">
                    { t('constantSymbol') }
                  </Row>
                </React.Fragment>
              }
            </Column>
            <Column flex={1} style={{fontWeight: 'bold'}}>
              <Row className="patterns-item-document-detail-select">
                <PaymentMethodSelect
                  items={PatternApp.settings.payment.methods}
                  activeItem={paymentMethod}
                  onItemSelect={item => {
                    this.props.onChange('paymentMethod', item.code)
                  }}
                  itemRenderer={(item, options) => <MenuItem key={`order-payment-method-${item.code}`} text={item.title} onClick={options.handleClick}/>}
                >
                  <Button style={{ marginLeft: -10, fontWeight: 'bold' }} minimal rightIcon="chevron-down" text={paymentMethod.title}/>
                </PaymentMethodSelect>
              </Row>
              { paymentMethod.code === PaymentMethod.bankTransfer.code && 
                <React.Fragment>
                  <Row className="patterns-item-document-detail">
                    { PatternApp.settings.bank.name }
                  </Row>
                  <Row className="patterns-item-document-detail">
                    { PatternApp.settings.bank.account }
                  </Row>
                  <Row className="patterns-item-document-detail">
                    { this.props.document.code }
                  </Row>
                  <Row className="patterns-item-document-detail">
                    0308
                  </Row>
                </React.Fragment>
              }
            </Column>
          </Row>
        </Row>

        <OrderItemsView
          showVat={PatternApp.settings.orders.showVat}
          document={this.props.document}
          onChange={items => this.props.onChange('items', items)}
        />

        <Row>
          <Row flex={4} style={{ marginTop: 12, alignItems: 'start' }}>
            <Button
              minimal
              intent="success"
              icon="plus"
              text={t('newItem')}
              onClick={() => {
                const order = new Order(this.props.document.clone)
                order.items.push(new DocumentItem({ index: this.props.document.items.length }))
                this.props.onChange('items', order.items)
              }}
            />
          </Row>
          <Column flex={10} style={{ paddingTop: 24 }}>
            { PatternApp.settings.orders.showVat && this.renderVatRecap(currency) }
            { this.renderTotal(currency) }
          </Column>
        </Row>
        <Row flex={1} style={{ paddingTop: 48 }}>
          <ControlGroup fill style={{ flex: 1 }}>
            <FormGroup label={t('note')}>
              <TextArea
                fill
                value={this.props.document.note}
                onChange={evt => this.props.onChange('note', evt.currentTarget.value)}
                className="patterns-item-document-note"
              />
            </FormGroup>
          </ControlGroup>
        </Row>
        <Row style={{ marginTop: 120 }}>
          <Column flex={1}></Column>
          <Column flex={1} className="patterns-item-document-signature">
            <div>.......................................................</div>
            <div>{t('signature')}</div>
          </Column>
        </Row>
      </Page>
    </Wrapper>
  }
}
