import { PatternSettings } from "./types"
import { Currency, Contact, PaymentMethod } from './models'
import { formatDate, parseDate, formatPrice } from './common'

export class PatternApp {
  public settings: PatternSettings

  configure(settings: PatternSettings) {
    const defaults = {
      name: '',
      logo: '',
      bank: {
        name: '',
        code: '',
        swift: '',
        account: '',
      },
      company: new Contact({}),
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
      orders: {
        showVat: true
      }
    }
    this.settings = Object.assign(defaults, settings)
  }

  get format() {
    return this.settings.format
  }

  getCurrency(code: string) {
    return this.settings.currency.currencies.find(c => c.code === code) ||
      this.settings.currency.defaultCurrency
  }

  getPaymentMethod(code: string) {
    return this.settings.payment.methods.find(c => c.code === code) ||
      this.settings.payment.defaultMethod
  }
}

const instance = new PatternApp()
export default instance