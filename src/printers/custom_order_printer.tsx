import React, { ReactElement } from 'react'
import { Colors } from '@blueprintjs/core'
import { Document, Font, Page, Image, StyleSheet, Text, View  } from '@react-pdf/renderer'
import bigDecimal from 'js-big-decimal'
import styled from '@react-pdf/styled-components'
import { t } from '../locale_manager'
import PatternApp from '../pattern_app'
import { Currency, Order, PaymentMethod } from '../models'
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
  marginBottom: 2mm;
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
  font-size: 8px;
  line-height: 1.3;
  font-family: "Oswald Light";
`

const DefaultTextValue = styled.Text`
  font-size: 8px;
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
    paddingTop: '10mm',
    paddingLeft: '12mm',
    paddingRight: '12mm',
    paddingBottom: '16mm'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

const PER_PAGE_FIRST = 39
const PER_PAGE_SECOND = 46

interface Props {
  free?: boolean
  document: Order
  itemsPrice: bigDecimal
  workPrice: bigDecimal
  quote: boolean
}

export default function InvoicePrinter({ document, quote, itemsPrice, workPrice, free = false }: Props): ReactElement {
  console.log('custom printer', itemsPrice, workPrice)
  const paymentMethod = PatternApp.getPaymentMethod(document.paymentMethod)
  const currency = PatternApp.getCurrency(document.currency)

  const renderHeader = (page: number) => {
    return <Row key={`header-${page}`} style={{ marginTop: 0, borderBottomWidth: 2, borderColor: Colors.LIGHT_GRAY3 }}>
      <Column style={{ flex: 6 }}>
        <TableHeaderItem>{t('title')} / {t('code')}</TableHeaderItem>
      </Column>
      { !free && <React.Fragment>
        <Column style={{ flex: 2 }}>
          <TableHeader align="right">{t('unitPriceNoVat')}</TableHeader>
        </Column>
        <Column style={{ flex: 2 }}>
          <TableHeader align="right">{t('unitPriceWithVat')}</TableHeader>
        </Column>
        <Column style={{ flex: 2 }}>
          <TableHeader align="right">{t('quantity')}</TableHeader>
        </Column>
        <Column style={{ flex: 3 }}>
          <TableHeader align="right">{t('linePriceNoVat')}</TableHeader>
        </Column>
      </React.Fragment>}
      { !free && PatternApp.settings.invoices.showVat && <React.Fragment>
          <Column style={{ flex: 2 }}>
            <TableHeader align="right">{t('vat')}</TableHeader>
          </Column>
          <Column style={{ flex: 2 }}>
            <TableHeader align="right">{t('vatPrice')}</TableHeader>
          </Column>
          <Column style={{ flex: 3 }}>
            <TableHeader align="right">{t('linePriceWithVat')}</TableHeader>
          </Column>
      </React.Fragment> }
      { free && <React.Fragment>
        <Column style={{ flex: 2 }}>
          <TableHeader></TableHeader>
        </Column>
        <Column style={{ flex: 3 }}>
          <TableHeader></TableHeader>
        </Column>
        <Column style={{ flex: 2 }}>
          <TableHeader></TableHeader>
        </Column>
        <Column style={{ flex: 3 }}>
          <TableHeader></TableHeader>
        </Column>
        <Column style={{ flex: 3 }}>
          <TableHeader align="right">{t('linePriceWithVat')}</TableHeader>
        </Column>
      </React.Fragment>}
    </Row>
  }

  const renderItems = (from: number, to: number) => {
    return document.items.slice(from, to).map((item, index) => {
      const itemRow = <Row key={`item-${index}`}>
        <Column style={{ flex: 6 }}>
          <TableCellItem style={{ textAlign: 'left'}}>{item.name}</TableCellItem>
        </Column>
        { !free && <React.Fragment>
          <Column style={{ flex: 2 }}>
            <TableCell align="right">{PatternApp.format.price(item.price, currency)}</TableCell>
          </Column>
          <Column style={{ flex: 2 }}>
            <TableCell align="right">{PatternApp.format.price(item.unitPriceWithVat, currency)}</TableCell>
          </Column>
          <Column style={{ flex: 2 }}>
            <TableCell align="right">{item.quantity} {item.unit}</TableCell>
          </Column>
          <Column style={{ flex: 3 }}>
            <TableCell align="right">{PatternApp.format.price(item.linePriceWithVat, currency)}</TableCell>
          </Column>
        </React.Fragment> }
        { !free && PatternApp.settings.orders.showVat &&
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

        { free && <React.Fragment>
          <Column style={{ flex: 2 }}>
            <TableCell>{ item.custom1 }</TableCell>
          </Column>
          <Column style={{ flex: 3 }}>
            <TableCell>{ item.custom2 }</TableCell>
          </Column>
          <Column style={{ flex: 2 }}>
            <TableCell>{ item.custom3 }</TableCell>
          </Column>
          <Column style={{ flex: 3 }}>
            <TableCell>{ item.custom4 }</TableCell>
          </Column>
          <Column style={{ flex: 3 }}>
            <TableCell style={{ fontFamily: "Oswald" }} align="right">
              { item.name.length > 1 && PatternApp.format.price(item.linePriceWithVat, currency)}
              { item.name.length <= 1 && <Text style={{ color: 'white' }}>0</Text>}
            </TableCell>
          </Column>
        </React.Fragment> }
      </Row>

      const itemRows = []
      itemRows.push(itemRow)

      // if (item.code && item.code.length > 0) {
      //   itemRows.push(<Row key={`item-code-${index}`} style={{ paddingLeft: '12mm', paddingRight: '12mm'}}>
      //     <TableCellItem style={{ fontFamily: 'Oswald', fontSize: 9, color: Colors.GRAY3 }}>
      //       { item.code }
      //     </TableCellItem>
      //   </Row>)
      // }

      return <React.Fragment key={`item-fragment-${index}`}>
        { itemRows }
      </React.Fragment>
    })
  }

  const renderVatRecap = (currency: Currency) => {
    const header = document.vats.length > 0 ?
      <Row style={{ flex: 1, marginTop: 0 }}>
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
    return <React.Fragment>
      <Row style={{ flex: 1, alignItems: 'center' }}>
        <Column style={{ flex: 14 }}></Column>
        <Column style={{ flex: 3 }}>
          <TableHeader style={{ textAlign: 'right' }}>SPOLU BEZ DPH</TableHeader>
        </Column>
        <Column style={{ flex: 4 }}>
          <TableHeader style={{ textAlign: 'right' }}>SPOLU S DPH 20%</TableHeader>
        </Column>
      </Row>
      <Row style={{ flex: 1, alignItems: 'center' }}>
        <Column style={{ flex: 14 }}>
          <TableHeader style={{ marginRight: 6 }}>Cena materiál</TableHeader>
        </Column>
        <Column style={{ flex: 3 }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Oswald',
            textAlign: 'right',
            backgroundColor: Colors.LIGHT_GRAY4
          }}>
            { PatternApp.format.price(itemsPrice.divide(new bigDecimal(1.2), 2), currency) }
          </Text>
        </Column>
        <Column style={{ flex: 4 }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Oswald',
            textAlign: 'right',
            backgroundColor: Colors.LIGHT_GRAY4
          }}>
            { PatternApp.format.price(itemsPrice, currency) }
          </Text>
        </Column>
      </Row>
      <Row style={{ flex: 1, alignItems: 'center' }}>
        <Column style={{ flex: 14 }}>
          <TableHeader style={{ marginRight: 6 }}>Cena práca</TableHeader>
        </Column>
        <Column style={{ flex: 3 }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Oswald',
            textAlign: 'right',
            backgroundColor: Colors.LIGHT_GRAY4
          }}>
            { PatternApp.format.price(workPrice.divide(new bigDecimal(1.2), 2), currency) }
          </Text>
        </Column>
        <Column style={{ flex: 4 }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Oswald',
            textAlign: 'right',
            backgroundColor: Colors.LIGHT_GRAY4
          }}>
            { PatternApp.format.price(workPrice, currency) }
          </Text>
        </Column>
      </Row>
      <Row style={{ flex: 1, alignItems: 'center' }}>
        <Column style={{ flex: 14 }}>
          <TableHeader style={{ marginRight: 6 }}>Cena spolu</TableHeader>
        </Column>
        <Column style={{ flex: 3 }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Oswald',
            textAlign: 'right',
            backgroundColor: Colors.LIGHT_GRAY4
          }}>
            { PatternApp.format.price(document.itemsTotal, currency) }
          </Text>
        </Column>
        <Column style={{ flex: 4 }}>
          <Text style={{
            fontSize: 11,
            fontFamily: 'Oswald',
            textAlign: 'right',
            backgroundColor: Colors.LIGHT_GRAY4
          }}>
            { PatternApp.format.price(document.itemsTotalWithVat, currency) }
          </Text>
        </Column>
      </Row>
    </React.Fragment>
  }

  const renderHead = () => {
    return <Column>
      <Header>
        <Logo>
          <Image src={PatternApp.settings.logo} style={{ width: '40mm', marginTop: 0 }}/>
        </Logo>
        <View style={{ flex: 4 }}>
          <HeaderCode>{ document.name || t('order.new') }</HeaderCode>
          <DocumentType>{ quote ? 'Cenová ponuka' : 'Objednávka' } { document.code }</DocumentType>
        </View>
      </Header>
      <Contacts>
        <View style={{ flex: 1, marginRight: 20 }}>
          <Text></Text>
        </View>
        <View style={{ flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20 }}>
          <Text style={{ fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 }}>
            { t('vendor') }
          </Text>
          <ContactForm contact={document.vendor} simple={true}/>
        </View>
        <View style={{ flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3 }}>
          <Text style={{ fontSize: 9, fontWeight: 'bold', fontFamily: 'Oswald Medium', color: Colors.GRAY3 }}>
            { t('customer') }
          </Text>
          <ContactForm contact={document.customer} simple={true}/>
        </View>
      </Contacts>
      <Contacts>
        <View style={{ flex: 1, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20}}>
          <DefaultTextLabel>{ t('issuedBy') }</DefaultTextLabel>
          <DefaultTextLabel>{ t('datePosted') }</DefaultTextLabel>
        </View>
        <View style={{ flex: 2, borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3, marginRight: 20 }}>
          <DefaultTextValue>{document.issuedBy}</DefaultTextValue>
          <DefaultTextValue>{PatternApp.format.date(document.createdAt)}</DefaultTextValue>
        </View>
        <View style={{ flex: 2, flexDirection: 'row',  borderTopWidth: 2, borderColor: Colors.LIGHT_GRAY3 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <DefaultTextLabel>{ t('paymentMethod') }</DefaultTextLabel>
            { paymentMethod.code === PaymentMethod.bankTransfer.code &&
              <React.Fragment>
                <DefaultTextLabel>{ t('bank') }</DefaultTextLabel>
                <DefaultTextLabel>{ t('bankAccount') }</DefaultTextLabel>
                <DefaultTextLabel>{ t('variableSymbol') }</DefaultTextLabel>
              </React.Fragment>
            }
          </View>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <DefaultTextValue>{ paymentMethod.title }</DefaultTextValue>
            { paymentMethod.code === PaymentMethod.bankTransfer.code &&
              <React.Fragment>
                <DefaultTextValue>{ PatternApp.settings.bank.name }</DefaultTextValue>
                <DefaultTextValue>{ PatternApp.settings.bank.account }</DefaultTextValue>
                <DefaultTextValue>{ document.numericCode() }</DefaultTextValue>
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
          {/* { PatternApp.settings.invoices.showVat && renderVatRecap(currency) } */}
          { renderTotal(currency) }
        </Column>
      </Row>
      <Row style={{ paddingTop: 12, marginTop: 0, marginBottom: 0 }}>
      {/* <DefaultText>{ document.note }</DefaultText> */}
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
        <View style={{ flex: 2, flexDirection: 'column' }}>
          <Text
            style={{ textAlign: 'left', fontSize: 7 }}
            key={`footer-page-company-${page}-company`}
          >
            Gargo s.r.o.
          </Text>
          <Text
            style={{ textAlign: 'left', fontSize: 7 }}
            key={`footer-page-company-${page}-web`}
          >
            web: http://www.gargo.sk
          </Text>
          <Text
            style={{ textAlign: 'left', fontSize: 7 }}
            key={`footer-page-company-${page}-email`}
          >
            email: gargo@gargo.sk
          </Text>
          <Text
            style={{ textAlign: 'left', fontSize: 7 }}
            key={`footer-page-company-${page}-phone`}>
            telefón (predajňa): 0905 909 815 / 0911 109 785
          </Text>
        </View>

        <Column style={{ flex: 2, alignItems: 'flex-end' }}>
          <Text
            fixed
            style={{ fontSize: 7, marginTop: 22}}
            key={`footer-page-top-${page}`}
            >Ďakujeme za Váš čas, ak ste boli spokojní s našimi službami,
            prosíme o zdiľanie a rezenciu na našu FB stránku
            GARGO - krbové a interíerové štúdio.
          </Text>
          <Text
            fixed
            style={{ textAlign: 'right' }}
            key={`footer-page-${page}`}
            render={({ pageNumber, totalPages }) =>{
              return `${t('page')} ${pageNumber} / ${totalPages}`
            }}
          />
        </Column>
    </View>

    if (document.items.length <= PER_PAGE_FIRST) {
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
        { renderItems(0, PER_PAGE_FIRST) }
        { footer(0) }
      </Page>)
    }

    const items = document.items.slice(PER_PAGE_FIRST, document.items.length)
    const itemPages = Math.ceil(items.length / PER_PAGE_FIRST)

    for (let i = 0; i < itemPages; i++) {
      const isLast = i + 1 === itemPages
      const remaining = items.length - (i * PER_PAGE_SECOND)
      const from = PER_PAGE_FIRST + i * PER_PAGE_SECOND
      const to = isLast ? PER_PAGE_FIRST + (i * PER_PAGE_SECOND) + remaining : PER_PAGE_SECOND + (i + 1) * PER_PAGE_SECOND

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
