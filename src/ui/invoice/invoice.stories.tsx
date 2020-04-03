import React, { useState } from "react"
import faker from 'faker'
import { Contact, Currency, Invoice, PaymentMethod } from '../../models'
import InvoiceView from './invoice_view'
import PatternApp from "../../demo_app"
import { FlexColumn, Toolbar } from "../../components"
import { BlobProvider, PDFViewer } from "@react-pdf/renderer"
import InvoicePrinter from "../../printers/invoice_printer"
import { Button } from "@blueprintjs/core"
import signature from '../../assets/signature.png'
import logo from '../../assets/patterns-logo.png'

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
  code: 'I20201234',
  vendor: PatternApp.settings.company,
  customer: customer,
  currency: PatternApp.settings.currency,
  price: randomPrice,
  price_with_vat: randomPrice * 1.2,
  dueAt: faker.date.future(),
  note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum risus, lacinia ut elit in, egestas laoreet nunc. Vivamus mollis consequat velit, et pulvinar nulla molestie at.
  Quisque sit amet nunc in arcu euismod scelerisque. Suspendisse id imperdiet augue, elementum accumsan libero. Nulla tincidunt erat libero, eu ornare nisi aliquet id. Nulla in felis accumsan
  risus molestie consectetur. Maecenas vel sapien euismod, tempus est quis, posuere massa. Aenean eget Cnibus lacus, et venenatis augue. jras scelerisque volutpat nisl, ut rutrum xusto
  pellentesque eu. Vestibulum ut Cnibus massa. Vestibulum eGcitur eu massa vitae sollicitudin. Nulla aliquam ultricies odio, sed facilisis nunc porttitor ac. Nulla aliquet mattis neque et
  porta. Etiam tempus dolor at erat aliquam sagittis. Praesent pharetra dolor nec tempor elementum.`,
  items: [],
  datePosted: faker.date.past(),
  paymentMethods: [ PaymentMethod.cash, PaymentMethod.bankTransfer ],
  dueDate: faker.date.future(),
  signature,
  logo
})

export const AllFeatures = () => {
  const [invoice, setInvoice ] = useState(testInvoice)

  return <InvoiceView
    editableCode={false}
    fetchNames={async query => {
      return []
    }}
    logo={PatternApp.settings.logo}
    signature={PatternApp.settings.signature}
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


export const Print = () => {
  const [invoice, setInvoice ] = useState(testInvoice)

  return <FlexColumn flex={1}>
    <Toolbar>
      <BlobProvider
        document={<InvoicePrinter document={invoice}/>}>
        {({ blob, url, loading, error }) => {
          console.log('url', url, 'loading', loading)
          return <Button
            icon="print"
            text="Print"
            onClick={() => {
              const data = window.URL.createObjectURL(blob)
              var link = document.createElement('a')
              link.href = data
              link.download="file.pdf"
              link.click()
              setTimeout(function(){
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
              }, 100);
            }}
            minimal
            small
            style={{ height: 28, alignSelf: 'center' }}
          />
        }}
      </BlobProvider>
    </Toolbar>
    <PDFViewer style={{ height: '100vh' }}>
      <InvoicePrinter
        document={invoice}
      />
    </PDFViewer>
  </FlexColumn>
}