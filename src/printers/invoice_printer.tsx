import React, { ReactElement } from 'react'
import { Colors } from '@blueprintjs/core'
import { Document, Font, Page, Image, StyleSheet, Text, View  } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'
import { t } from '../locale_manager'
import PatternApp from '../pattern_app'
import { Currency, Invoice, PaymentMethod } from '../models'
import ContactForm from './contact_form'

Font.register({
  family: 'Oswald',
  src: 'https://www.quanto.sk/fonts/Oswald-Regular.ttf'
})

Font.register({
  family: 'Oswald Light',
  src: 'https://www.quanto.sk/fonts/Oswald-Light.ttf'
})

Font.register({
  family: 'Oswald Medium',
  src: 'https://www.quanto.sk/fonts/Oswald-Medium.ttf'
})

Font.register({
  family: 'Oswald Bold',
  src: 'https://www.quanto.sk/fonts/Oswald-Bold.ttf'
})

const Header = styled.View`
  display: flex;
  flexDirection: row;
`

const Contacts = styled.View`
  display: flex;
  flexDirection: row;
  marginBottom: 4mm;
`

const Logo = styled.View`
  flex: 1;
`

const Column = styled.View`
  display: flex;
  flex-direction: column;
`

const Row = styled.View`
  display: flex;
  flex-direction: row;
`

const HeaderCode = styled.Text`
  text-align: right;
  font-size: 22px;
  font-weight: bold;
  font-family: "Oswald";
`

const DocumentType = styled.Text`
  text-align: right;
  font-size: 10px;
  font-weight: bold;
  color: ${Colors.GRAY3};
  text-transform: uppercase;
  font-family: "Oswald Medium";
`

const DefaultTextLabel = styled.Text`
  font-size: 9px;
  line-height: 1.3;
  font-family: "Oswald Light";
`

const DefaultTextValue = styled.Text`
  font-size: 9px;
  line-height: 1.3;
  font-family: "Oswald";
`

const DefaultText = styled.Text`
  font-size: 9px;
  line-height: 1.3;
  font-family: "Oswald Light";
`

const TableHeaderItem = styled.Text`
  font-size: 8px;
  text-transform: uppercase;
  font-family: "Oswald Medium";
  color: ${Colors.GRAY3};
`

const TableHeader = styled.Text`
  font-size: 8px;
  text-transform: uppercase;
  text-align: right;
  font-family: "Oswald Medium";
  color: ${Colors.GRAY3};
`

const TableCellItem = styled.Text`
  font-size: 9px;
  text-transform: uppercase;
  text-align: left;
  font-family: "Oswald";
`

const TableCell = styled.Text`
  font-size: 9px;
  text-align: right;
  font-family: "Oswald Light";
`

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: '12mm',
    paddingLeft: '12mm',
    paddingRight: '12mm',
    paddingBottom: '20mm'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

const PER_PAGE = 33

interface Props {
  document: Invoice
}

export default function InvoicePrinter({ document }: Props): ReactElement {
  const paymentMethod = PatternApp.getPaymentMethod(document.paymentMethod)
  const currency = PatternApp.getCurrency(document.currency)

  const renderHeader = (page: number) => {
    return <Row key={`header-${page}`} style={{ marginTop: '12mm', marginBottom: '2mm', paddingBottom: 4, borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, }}>
      <Column style={{ flex: 6 }}>
        <TableHeaderItem>{t('title')} / {t('code')}</TableHeaderItem>
      </Column>
      <Column style={{ flex: 3 }}>
        <TableHeader align="right">{t('unitPriceNoVat')}</TableHeader>
      </Column>
      <Column style={{ flex: 2 }}>
        <TableHeader align="right">{t('quantity')}</TableHeader>
      </Column>
      <Column style={{ flex: 3 }}>
        <TableHeader align="right">{t('linePriceNoVat')}</TableHeader>
      </Column>
      { PatternApp.settings.invoices.showVat &&
        <React.Fragment>
          <Column style={{ flex: 2 }}>
            <TableHeader align="right">{t('vat')}</TableHeader>
          </Column>
          <Column style={{ flex: 2 }}>
            <TableHeader align="right">{t('vatPrice')}</TableHeader>
          </Column>
          <Column style={{ flex: 3 }}>
            <TableHeader align="right">{t('linePriceWithVat')}</TableHeader>
          </Column>
        </React.Fragment>
      }
    </Row>
  }

  const renderItems = (from: number, to: number) => {
    return document.items.slice(from, to).map((item, index) => {
      const itemRow = <Row key={`item-${index}`}>
        <Column style={{ flex: 6 }}>
          <TableCellItem style={{ textAlign: 'left'}}>{item.name}</TableCellItem>
        </Column>
        <Column style={{ flex: 3 }}>
          <TableCell align="right">{PatternApp.format.price(item.price, currency)}</TableCell>
        </Column>
        <Column style={{ flex: 2 }}>
          <TableCell align="right">{item.quantity} {item.unit}</TableCell>
        </Column>
        <Column style={{ flex: 3 }}>
          <TableCell align="right">{PatternApp.format.price(item.linePriceWithVat, currency)}</TableCell>
        </Column>
        { PatternApp.settings.invoices.showVat &&
          <React.Fragment>
            <Column style={{ flex: 2 }}>
              <TableCell align="right">{item.vat} %</TableCell>
            </Column>
            <Column style={{ flex: 2 }}>
              <TableCell align="right">{PatternApp.format.price(item.vatPrice, currency)}</TableCell>
            </Column>
            <Column style={{ flex: 3 }}>
              <TableCell style={{ fontFamily: "Oswald" }} align="right">
                {PatternApp.format.price(item.linePriceWithVat, currency)}
              </TableCell>
            </Column>
          </React.Fragment>
        }
      </Row>

      const itemRows = []
      itemRows.push(itemRow)

      if (item.code && item.code.length > 0) {
        itemRows.push(<Row key={`item-code-${index}`} style={{ paddingLeft: '12mm', paddingRight: '12mm'}}>
          <TableCellItem style={{ fontFamily: 'Oswald', fontSize: 9, color: Colors.GRAY3 }}>
            { item.code }
          </TableCellItem>
        </Row>)
      }

      return <React.Fragment key={`item-fragment-${index}`}>
        { itemRows }
      </React.Fragment>
    })
  }

  const renderVatRecap = (currency: Currency) => {
    const header = document.vats.length > 0 ?
      <Row style={{ flex: 1, marginTop: 24 }}>
        <Column style={{ flex: 12, textAlign: 'right', paddingBottom: 6 }} className="patterns-item-document-header-column"><TableHeader></TableHeader></Column>
        <Column style={{ flex: 2, textAlign: 'right', paddingBottom: 6 }} className="patterns-item-document-header-column"><TableHeader>{t('vatRecap')}</TableHeader></Column>
        <Column style={{ flex: 2, textAlign: 'right', borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingBottom: 6 }} className="patterns-item-document-header-column bordered"><TableHeader>{t('vat')}</TableHeader></Column>
        <Column style={{ flex: 2, textAlign: 'right', borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingBottom: 6 }} className="patterns-item-document-header-column bordered"><TableHeader>{t('vatBase')}</TableHeader></Column>
        <Column style={{ flex: 3, textAlign: 'right', borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingBottom: 6 }} className="patterns-item-document-header-column bordered"><TableHeader>{t('vatValue')}</TableHeader></Column>
      </Row>
      :
      null

    const rows = document.vats.map((vat, index) =>
      <Row key={`invoice-vat-${index}`} style={{ flex: 1 }}>
        <Column style={{ flex: 14 }}></Column>
        <Column style={{ flex: 2, textAlign: 'right' }}><DefaultText>{ vat.vat }%</DefaultText></Column>
        <Column style={{ flex: 2, textAlign: 'right' }}><DefaultText>{ PatternApp.format.price(vat.base, currency) }</DefaultText></Column>
        <Column style={{ flex: 3, textAlign: 'right' }}><DefaultText>{ PatternApp.format.price(vat.price, currency) }</DefaultText></Column>
      </Row>
    )

    return <React.Fragment>
      { header }
      { rows }
    </React.Fragment>
  }

  const renderTotal = (currency: Currency) => {
    return <Row style={{ flex: 1, height: 42, alignItems: 'center' }}>
      <Column style={{ flex: 14 }}>
        <TableHeader style={{ marginRight: 6 }}>{t('total')}</TableHeader>
      </Column>
      <Column style={{ flex: 7 }}>
        <Text style={{
          fontSize: 11,
          fontFamily: 'Oswald',
          textAlign: 'right',
          backgroundColor: Colors.LIGHT_GRAY4
        }}>
          { PatternApp.format.price(PatternApp.settings.invoices.showVat ?
          document.itemsTotalWithVat : document.itemsTotal, currency) }
        </Text>
      </Column>
    </Row>
  }

  const renderHead = () => {
    return <Column>
      <Header>
        <Logo>
          <Image src={PatternApp.settings.logo} style={{ width: '40mm', marginTop: 10 }}/>
        </Logo>
        <View style={{ flex: 4 }}>
          <HeaderCode>{ document.code || t('invoice.new') }</HeaderCode>
          <DocumentType>{ t('invoice.type') }</DocumentType>
        </View>
      </Header>
      <Contacts>
        <View style={{ flex: 1, marginRight: 20 }}>
          <Text></Text>
        </View>
        <View style={{ flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20, paddingTop: 6 }}>
          <Text style={{ fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 }}>
            { t('vendor') }
          </Text>
          <ContactForm contact={document.vendor} simple={false}/>
        </View>
        <View style={{ flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingTop: 6 }}>
          <Text style={{ fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 }}>
            { t('customer') }
          </Text>
          <ContactForm contact={document.customer} simple={false} />
        </View>
      </Contacts>
      <Contacts>
        <View style={{ flex: 1, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20, paddingTop: 6 }}>
          <DefaultTextLabel>{ t('datePosted') }</DefaultTextLabel>
          <DefaultTextLabel>{ t('dateDelivered') }</DefaultTextLabel>
          <DefaultTextLabel>{ t('dateDue') }</DefaultTextLabel>
        </View>
        <View style={{ flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20, paddingTop: 6 }}>
          <DefaultTextValue>{PatternApp.format.date(document.createdAt)}</DefaultTextValue>
          <DefaultTextValue>{PatternApp.format.date(document.deliveryDate)}</DefaultTextValue>
          <DefaultTextValue>{PatternApp.format.date(document.dueDate)}</DefaultTextValue>
        </View>
        <View style={{ flex: 2, flexDirection: 'row',  borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, paddingTop: 6 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <DefaultTextLabel>{ t('paymentMethod') }</DefaultTextLabel>
            { paymentMethod.code === PaymentMethod.bankTransfer.code &&
              <React.Fragment>
                <DefaultTextLabel>{ t('bank') }</DefaultTextLabel>
                <DefaultTextLabel>{ t('bankAccount') }</DefaultTextLabel>
                <DefaultTextLabel>{ t('variableSymbol') }</DefaultTextLabel>
                <DefaultTextLabel>{ t('constantSymbol') }</DefaultTextLabel>
              </React.Fragment>
            }
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <DefaultTextValue>{ paymentMethod.title }</DefaultTextValue>
            { paymentMethod.code === PaymentMethod.bankTransfer.code &&
              <React.Fragment>
                <DefaultTextValue>{ PatternApp.settings.bank.name }</DefaultTextValue>
                <DefaultTextValue>{ PatternApp.settings.bank.account }</DefaultTextValue>
                <DefaultTextValue>{ document.code }</DefaultTextValue>
                <DefaultTextValue>308</DefaultTextValue>
              </React.Fragment>
            }
          </View>
        </View>
      </Contacts>
    </Column>
  }

  const renderEnding = (page: number) => {
    return <React.Fragment key="ending">
      <Row>
        <Column style={{ paddingTop: 24, flex: 1 }}>
          { PatternApp.settings.invoices.showVat && renderVatRecap(currency) }
          { renderTotal(currency) }
        </Column>
      </Row>
      <Row style={{ paddingTop: 12, marginTop: 0, marginBottom: 0 }}>
      <DefaultText>{ document.note }</DefaultText>
      </Row>
      <Row style={{
        paddingTop: 24,
        marginTop: '12mm',
        bottom: '24mm',
        textAlign: 'right',
        right: '12mm',
        width: 200,
        position: 'absolute'
      }}>
        <Column style={{ flex: 1 }}></Column>
        <Column style={{ flex: 1, justifyContent: 'right' }} className="patterns-item-document-signature">
          <Image src={document.signature} style={{ width: '40mm' }}/>
          <DefaultText style={{ textAlign: 'right', marginTop: -20 }}>.......................................................</DefaultText>
          <DefaultText style={{ textAlign: 'right', fontFamily: 'Oswald Light', fontSize: 8, textTransform: 'uppercase', colors: Colors.LIGHT_GRAY1 }}>{t('signature')}</DefaultText>
        </Column>
      </Row>
    </React.Fragment>
  }

  const renderPages = () => {
    const pages = []
    const head = <React.Fragment key={`page-0`}>
      { renderHead() }
      { renderHeader(0) }
    </React.Fragment>

    const footer = page => <View
      fixed
      key={`footer-${page}`}
      style={{
        position: 'absolute',
        bottom: '10mm',
        width: '100vw',
        fontSize: 9,
        fontFamily: 'Oswald Light',
        flexDirection: 'row',
        display: 'flex',
        paddingLeft: '12mm',
        paddingRight: '12mm',
      }}>
        <Text
          style={{ flex: 1, textAlign: 'left' }}
          key={`footer-page-company-${page}`}
        >{ PatternApp.settings.company.name }
        </Text>

        <Text
          fixed
          style={{ flex: 1, textAlign: 'right' }}
          key={`footer-page-${page}`}
          render={({ pageNumber, totalPages }) =>{
            console.log('pag', pageNumber, 'total', totalPages)
            return `${t('page')} ${pageNumber} / ${totalPages}`
          }
        }/>
    </View>

    if (document.items.length <= 18) {
      // single page
      pages.push(<Page key={`page-0`} size="A4" style={styles.page}>
        { head }
        { renderItems(0, document.items.length) }
        { renderEnding(0) }
        { footer(0) }
      </Page>)
      return pages
    } else {
      // first page
      pages.push(<Page key={`page-0`} size="A4" style={styles.page}>
        { head }
        { renderItems(0, 18) }
        { footer(0) }
      </Page>)
    }

    const items = document.items.slice(18, document.items.length)
    const itemPages = Math.ceil(items.length / PER_PAGE)

    for (let i = 0; i < itemPages; i++) {
      const isLast = i + 1 === itemPages
      const remaining = items.length - (i * PER_PAGE)
      const from = 18 + i * PER_PAGE
      const to = isLast ? 18 + (i * PER_PAGE) + remaining : 18 + (i + 1) * PER_PAGE

      const content = [
        renderHeader(i + 1),
        renderItems(from, to)
      ]

      if (isLast) {
        content.push(renderEnding(i + 1))
      }

      content.push(footer(i + 1))

      pages.push(<Page key={`page-${i + 1}`} size="A4" style={styles.page}>
        { content }
      </Page>)
    }

    return pages
  }

  return <Document>
    { renderPages() }
  </Document>
}
