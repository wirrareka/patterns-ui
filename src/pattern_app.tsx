import { PatternSettings } from "./types"
import { Currency, Contact, PaymentMethod } from './models'
import { formatDate, parseDate, formatPrice } from './common'
import Observable from "./observable"

export class PatternApp extends Observable {
  public settings: PatternSettings

  public Events = {
    Confirm: 'confirm',
    Success: 'notify-success',
    Failure: 'notify-failure'
  }

  constructor() {
    super()
    this.configure = this.configure.bind(this)
    this.getCurrency = this.getCurrency.bind(this)
    this.getPaymentMethod = this.getPaymentMethod.bind(this)
    this.confirm = this.confirm.bind(this)
    this.success = this.success.bind(this)
    this.failure = this.failure.bind(this)
  }

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

  confirm(title: string, description: string, action: React.ReactElement, icon?: string) {
    this.notify(this.Events.Confirm, { title, description, action, icon })
  }

  success(message: string) {
    this.notify(this.Events.Confirm, { message })
  }

  failure(message: string) {
    this.notify(this.Events.Confirm, { message })
  }
}

const instance = new PatternApp()
export default instance