import moment from 'moment'
import Currency from './models/currency'
import bigDecimal from 'js-big-decimal'

export const DEFAULT_HOUR = 3
export const DAY_MS = 1000 * 3600 * 24

export const DateFormat = 'DD.MM.YYYY'
export const DateTimeFormat = 'DD.MM.YYYY HH:mm'
export const TimeFormat = 'hh:mm'

export const deserializeDate = (date?: string | Date) => date ? new Date(date) : new Date()
export const deserializeNumber = (number?: number) => number || 0
export const deserializeString = (string?: string) => string || ''

export const today = () => {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), DEFAULT_HOUR, 0)
}

export const yesterday = () => {
  const now = today()
  return new Date(now.getTime() - DAY_MS)
}

export const weekAgo = () => {
  const now = today()
  return new Date(now.getTime() - (7 * DAY_MS))
}

export const tommorow = () => {
  const now = today()
  return new Date(now.getTime() + DAY_MS)
}

export const formatDate = (date: string | Date) => {
  return moment(date).format(DateFormat)
}

export const parseDate = (date: string) => {
  return moment(date || new Date(1).toISOString(), DateFormat).toDate()
}

export const formatTime = (date: string | Date) => {
  return moment(date).format(TimeFormat)
}

export const formatDateTime = (date: string | Date) => {
  return moment(date).format(DateTimeFormat)
}

export const formatPrice = (price: bigDecimal | number | string, currency: Currency) => {
  const elements = []
  if (typeof price === 'number') {
    elements.push((price || 0).toFixed(2))
  } else if (typeof price === 'string') {
    elements.push((parseFloat(price)).toFixed(2))
  } else {
    elements.push(price.round(2).getValue())
  }

  if (currency) {
    elements.push(currency.symbol)
  }

  return elements.join(' ')
}

export const hasString = (string: string, minLength: number = 1) => {
  return string.length >= minLength
}

export const hasStrings = (strings: Array<string>, minLength: number = 1) => {
  let valid = true
  for (let i = 0; i < strings.length; i++) {
    if (!hasString(strings[i])) {
      valid = false
      break
    }
  }
  return valid
}
