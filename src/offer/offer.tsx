import React, { Component } from 'react'
import { Button, Colors, MenuItem } from '@blueprintjs/core'
import { DateInput } from '@blueprintjs/datetime'
import { Select } from '@blueprintjs/select'
import { Wrapper, Page, Header, Logo, HeaderCode, DocumentType } from '../invoice/components'
import { FormatDateType, ParseDateType, FormatPriceType } from '../types'
import { t } from '../locale-manager'
import Contact from '../models/contact'
import Offer from '../models/offer'
import PaymentMethod from '../models/payment-method'
import InvoiceItem from '../models/invoice-item'
import { FlexColumn as Column, FlexRow as Row } from '../components'
import InvoiceItems from '../invoice/items'
import AddressBox from '../invoice/address-box'
import './offer.scss'

export const DefaultPaymentMethods = [
  new PaymentMethod({id: 'cash', title: 'Hotovosť'}),
  new PaymentMethod({id: 'card', title: 'Kartou'}),
  new PaymentMethod({id: 'transfer', title: 'Bankový prevod'}),
  new PaymentMethod({id: 'paypal', title: 'Paypal'})
] as PaymentMethod[]

const PaymentMethodSelect = Select.ofType<PaymentMethod>()

interface Props {
  formatDate: FormatDateType
  parseDate: ParseDateType
  formatPrice: FormatPriceType
  offer: Offer
  logo: string
  onChange: (offer: Offer) => void
  paymentMethods: PaymentMethod[]
  fetch: (query: string) => Promise<Contact[]>
}

export default class OfferDocument extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(offer: Offer) {
    offer.recalculate()
    this.props.onChange(offer)
  }

  render() {
    const paymentMethod = this.props.paymentMethods.find(method => method.id === this.props.offer.paymentMethod) || DefaultPaymentMethods[2]

    return <Wrapper>
      <Page>
        <Header>
          <Logo>
            <img alt="logo" src={this.props.logo}/>
          </Logo>
          <Column style={{ flex: 1 }}>
            <HeaderCode>{ this.props.offer.code || t('offer.new') }</HeaderCode>
            <DocumentType>{ t('offer.documentType') }</DocumentType>
          </Column>
        </Header>
        <Row style={{ alignItems: 'flex-start' }}>
          <Column flex={1} style={{justifyContent: 'flex-end', marginRight: 30}}>
            Obchodný register OS Trnava Oddiel Sro, vložka č. 34375/T
          </Column>
          <AddressBox
            key="address-vendor"
            disabled={true}
            header="DODÁVATEĽ"
            contact={this.props.offer.company}
            onChange={(contact: Contact) => {
              const clone = new Offer(this.props.offer.clone)
              clone.company = contact
              this.onChange(clone)
            }}
            fetch={this.props.fetch}
          />
          <AddressBox
            key="address-customer"
            header="ODBERATEĽ"
            contact={this.props.offer.customer}
            onChange={(contact: Contact) => {
              const clone = new Offer(this.props.offer.clone)
              clone.customer = contact
              this.onChange(clone)
            }}
            fetch={this.props.fetch}
          />
        </Row>

        <Row style={{ marginTop: 24, paddingTop: 0, fontSize: 14, marginBottom: 24, alignItems: 'flex-start' }}>
          <Row flex={1} style={{ borderTop: '3px solid #cccccc', paddingTop: 10, marginRight: 30}}>
            <Column flex={1}>
              <Row style={{ height: 24, alignItems: 'center' }}>{ t('datePosted') }</Row>
              <Row style={{ height: 24, alignItems: 'center' }}>{ t('dateDelivered') }</Row>
              <Row style={{ height: 24, alignItems: 'center' }}>{ t('dateDue') }</Row>
            </Column>
          </Row>
          <Row flex={2} style={{borderTop: '3px solid #cccccc', paddingTop: 10}}>
            <Column style={{ marginLeft: 5, fontWeight: 'bold' }}>
              <DateInput
                formatDate={this.props.formatDate}
                parseDate={this.props.parseDate}
                value={this.props.offer.createdAt}
              />
              <DateInput
                formatDate={this.props.formatDate}
                parseDate={this.props.parseDate}
                value={this.props.offer.createdAt}
              />
              <DateInput
                formatDate={this.props.formatDate}
                parseDate={this.props.parseDate}
                value={this.props.offer.dueAt}
              />
            </Column>
          </Row>
          <Row flex={2} style={{ borderTop: '3px solid #cccccc', marginLeft: 5, paddingTop: 10 }}>
            <Column flex={1}>
              <Row style={{ height: 30, alignItems: 'center' }}>
                { t('paymentMethod') }
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                { t('bank') }
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                { t('bankAccount') }
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                { t('variableSymbol') }
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                { t('constantSymbol') }
              </Row>
            </Column>
            <Column flex={1} style={{fontWeight: 'bold'}}>
              <Row style={{ height: 30, alignItems: 'center' }}>
                <PaymentMethodSelect
                  items={this.props.paymentMethods}
                  activeItem={paymentMethod}
                  onItemSelect={item => {
                    const clone = new Offer(this.props.offer.clone)
                    clone.paymentMethod = item.id
                    this.onChange(clone)
                  }}
                  itemRenderer={(item, options) => <MenuItem key={item.id} text={item.title} onClick={options.handleClick}/>}
                >
                  <Button style={{ marginLeft: -10, fontWeight: 'bold' }} minimal rightIcon="chevron-down" text={paymentMethod.title}/>
                </PaymentMethodSelect>
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                VÚB, a.s.
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                2121123456 / 1100
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                { this.props.offer.code }
              </Row>
              <Row style={{ height: 24, alignItems: 'center' }}>
                0308
              </Row>
            </Column>
          </Row>
        </Row>

        <InvoiceItems
          invoice={this.props.offer}
          onChange={this.onChange}
        />

        <Row>
          <Row flex={2} style={{ marginTop: 12, alignItems: 'start' }}>
            <Button
              minimal
              intent="success"
              icon="plus"
              text={t('newItem')}
              onClick={() => {
                const offer = new Offer(this.props.offer.clone)
                offer.items.push(new InvoiceItem({ index: this.props.offer.items.length }))
                this.onChange(offer)
              }}
            />
          </Row>
          <Column flex={1} style={{ paddingTop: 24 }}>
            <Row flex={1}>
              <Column flex={1}>Vat Recap</Column>
              <Column style={{ borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }} flex={1}>RATE</Column>
              <Column style={{ borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }} flex={1}>BASE</Column>
              <Column style={{ borderBottom: '3px solid black', textAlign: 'right', fontSize: 12 }} flex={1}>VAT</Column>
            </Row>
            { this.props.offer.vats.map((vat, index) => <Row key={`invoice-vat-${index}`} flex={1} style={{ height: 24, alignItems: 'center' }}>

              <Column flex={1}></Column>
              <Column style={{ textAlign: 'right' }} flex={1}>{ vat.vat }%</Column>
              <Column style={{ textAlign: 'right' }} flex={1}>{ this.props.formatPrice(vat.base, this.props.offer.currency) }</Column>
              <Column style={{ textAlign: 'right' }} flex={1}>{ this.props.formatPrice(vat.price, this.props.offer.currency) }</Column>
            </Row> )}
            <Row flex={1} style={{ height: 42, alignItems: 'center' }}>
              <Column flex={1}>Total</Column>
            <Column style={{ borderTop: '3px solid black', textAlign: 'right', height: 32, justifyContent: 'center', fontSize: 18, backgroundColor: Colors.LIGHT_GRAY5 }} flex={3}>
              { this.props.formatPrice(this.props.offer.price, this.props.offer.currency) }
            </Column>
            </Row>
          </Column>
        </Row>
        <Row style={{ marginTop: 120 }}>
          <Column flex={1}></Column>
          <Column flex={1} style={{textAlign: 'right'}}>
            <div>.......................................................</div>
            <div>Podpis</div>
          </Column>
        </Row>
      </Page>
    </Wrapper>
  }
}
