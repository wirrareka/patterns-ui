import BaseModel from './base_model'
import { t } from '../locale_manager'

export default class PaymentMethod extends BaseModel {
  code: string
  title: string

  constructor(data: any) {
    super(data)
    this.code = data.code
    this.title = data.title
  }

  static get card() {
    return new PaymentMethod({
      code: 'card',
      title: t('payment_methods.card')
    })
  }

  static get cash() {
    return new PaymentMethod({
      code: 'cash',
      title: t('payment_methods.cash')
    })
  }

  static get cashOnDelivery() {
    return new PaymentMethod({
      code: 'cash_on_delivery',
      title: t('payment_methods.cash_on_delivery')
    })
  }

  static get bankTransfer() {
    return new PaymentMethod({
      code: 'bank_transfer',
      title: t('payment_methods.bank_transfer')
    })
  }

  static get paypal() {
    return new PaymentMethod({
      code: 'bank_transfer',
      title: t('payment_methods.bank_transfer')
    })
  }

  static get all() {
    return [
      PaymentMethod.card,
      PaymentMethod.cash,
      PaymentMethod.cashOnDelivery,
      PaymentMethod.bankTransfer,
      PaymentMethod.paypal
    ]
  }
}