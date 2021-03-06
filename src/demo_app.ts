import faker from 'faker'
import PatternApp from './pattern_app'
import { Contact, Currency, PaymentMethod } from './models'
import { formatDate, formatPrice, parseDate } from './common'
import logo from './assets/patterns-logo.png'
import signature from './assets/signature.png'
import { localeManager } from './locale_manager'

const company = new Contact({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  name: faker.company.companyName(),
  email: faker.internet.email(),
  currency: Currency.euro,
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

PatternApp.configure({
  name: 'Patterns Demo',
  logo,
  signature,
  bank: {
    name: 'SecretBank inc.',
    code: '123456',
    swift: 'SCBTFT',
    account: '123456789/1234',
  },
  company,
  currency: {
    defaultCurrency: Currency.euro,
    currencies: [ Currency.euro ],
  },
  payment: {
    defaultMethod: PaymentMethod.bankTransfer,
    methods: [ PaymentMethod.bankTransfer, PaymentMethod.cash ],
  },
  format: {
    date: formatDate,
    parseDate: parseDate,
    price: formatPrice
  },
  invoices: {
    showVat: true,
    showSymbols: false
  },
  orders: {
    showVat: true,
    showSymbols: false
  }
})

export default PatternApp