import React, { useState } from "react"
import faker from 'faker'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { Button } from '@blueprintjs/core'
import { FlexColumn, Toolbar } from '../../components'
// import logo from '../assets/patterns-logo.png'
import { Contact, Currency, Order, PaymentMethod, DocumentItem } from '../../models'
import OrderView from './order_view'
import PatternApp from "../../demo_app"
import OrderPrinter from '../../printers/order_printer'

export default {
  title: "Order"
}

const genItem = (index: number) => {
  return new DocumentItem({
    index: index,
    code: `test-item-${index}`,
    name: `Test Item #${index}`,
    unit: 'pcs.',
    currency: Currency.euro.symbol,
    price: 100,
    quantity: 10,
    vat: 20,
    unitPriceWithVat: 120,
    linePrice: 1000,
    linePriceWithVat: 1200
  })
}

const genCustomer = () => new Contact({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  name: faker.company.companyName(),
  email: faker.internet.email(),
  currency: new Currency({ name: 'Euro', symbol: '€' }),
  phone: faker.phone.phoneNumber(),
  site: faker.internet.url(),
  business_id: faker.random.number(),
  vat_id: faker.random.number(),
  vat_payer_id: faker.random.number(),
  isActive: true,
  note: '',
  street: faker.address.streetAddress(),
  city: faker.address.city(),
  zip: faker.address.zipCode(),
  country: faker.address.country()
})

const customer = genCustomer()

const randomPrice = faker.commerce.price()

const testOrder = new Order({
  code: 'O20201234',
  vendor: PatternApp.settings.company,
  customer: customer,
  currency: PatternApp.settings.currency,
  price: randomPrice,
  price_with_vat: randomPrice * 1.2,
  dueAt: faker.date.future(),
  note: faker.random.words(),
  items: [
    genItem(0),
    genItem(1),
    genItem(2),
    genItem(3),
    genItem(4),
    genItem(5),
    genItem(6),
    genItem(7),
    genItem(8),
    genItem(9),
    genItem(10),
    genItem(11),
    genItem(12),
    genItem(13),
    genItem(14),
    genItem(15),
    genItem(16),
    genItem(17),
    genItem(18),
    genItem(19),
    genItem(20),
    genItem(21),
    genItem(22),
    genItem(23),
    genItem(24),
    genItem(25),
    genItem(26),
    genItem(27),
    genItem(28),
    genItem(29),
    genItem(30),
    genItem(31),
    genItem(32),
    genItem(33),
    genItem(34),
    genItem(35),
    genItem(36),
    genItem(37),
    genItem(38),
    genItem(39),
    genItem(40),
    genItem(41),
    genItem(42),
    genItem(43),
    genItem(44),
    genItem(45),
    genItem(46),
    genItem(47),
    genItem(48),
    genItem(49),
    genItem(50),
    genItem(51),
    genItem(52),
    genItem(53),
    genItem(54),
    genItem(55),
    genItem(56),
    genItem(57),
    genItem(58),
    genItem(59),
    genItem(60),
    genItem(61),
    genItem(62),
    genItem(63),
    genItem(64),
    genItem(65),
    genItem(66),
    genItem(67),
    genItem(68),
    genItem(69),
    genItem(70),
    genItem(71),
    genItem(72),
    genItem(73),
    genItem(74),
    genItem(75),
    genItem(76),
    genItem(77),
    genItem(78),
    genItem(79),
    genItem(80),
    genItem(81),
    genItem(82),
    genItem(83),
    genItem(84),
    genItem(85),
    genItem(86),
    genItem(87),
    genItem(88),
    genItem(89),
  ],
  datePosted: faker.date.past(),
  paymentMethods: [ PaymentMethod.cash, PaymentMethod.bankTransfer ],
  validTill: faker.date.future()
})

export const AllFeatures = () => {
  const [order, setOrder ] = useState(testOrder)

  return <OrderView
    logo={PatternApp.settings.logo}
    document={order}
    onChange={(property, value) => {
      const clone = new Order(order.clone)
      clone[property] = value
      setOrder(clone)
    }}
    fetch={async query => {
      return [ customer, genCustomer(), genCustomer(), genCustomer() ]
    }}
  />
}

export const Print = () => {
  return <FlexColumn flex={1}>
    <Toolbar>
      <PDFDownloadLink
        style={{ alignSelf: 'center' }}
        document={<OrderPrinter document={testOrder}/>}
        fileName="somename.pdf">
        {({ blob, url, loading, error }) => {
          console.log('url', url, 'loading', loading)
          return <Button
            icon="print"
            text="Print"
            minimal
            small
            style={{ height: 28 }}
          />
        }}
      </PDFDownloadLink>
    </Toolbar>
    <PDFViewer style={{ height: '100vh' }}>
      <OrderPrinter document={testOrder}/>
    </PDFViewer>
  </FlexColumn>
}