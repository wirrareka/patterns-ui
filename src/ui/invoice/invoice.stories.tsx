import React, { useState } from "react"
import faker from 'faker'
// import logo from '../assets/patterns-logo.png'
import { Contact, Currency, Invoice, PaymentMethod } from '../../models'
import InvoiceView from './invoice_view'
import PatternApp from "../../demo_app"

export default {
  title: "Invoice"
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

const testInvoice = new Invoice({
  code: 'O20201234',
  vendor: PatternApp.settings.company,
  customer: customer,
  currency: PatternApp.settings.currency,
  price: randomPrice,
  price_with_vat: randomPrice * 1.2,
  dueAt: faker.date.future(),
  note: faker.random.words(),
  items: [],
  datePosted: faker.date.past(),
  paymentMethods: [ PaymentMethod.cash, PaymentMethod.bankTransfer ],
  dueDate: faker.date.future()
})

export const AllFeatures = () => {
  const [invoice, setInvoice ] = useState(testInvoice)

  return <InvoiceView
    logo={PatternApp.settings.logo}
    document={invoice}
    onChange={(property, value) => {
      const clone = new Invoice(invoice.clone)
      clone[property] = value
      setInvoice(clone)
    }}
    fetch={async query => {
      return [ customer, genCustomer(), genCustomer(), genCustomer() ]
    }}
  />
}