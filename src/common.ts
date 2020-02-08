import moment from 'moment'

export const DEFAULT_HOUR = 3
export const DAY_MS = 1000 * 3600 * 24

export const DateFormat = 'DD.MM.YYYY'
export const DateTimeFormat = 'DD.MM.YYYY HH:mm'
export const TimeFormat = 'hh:mm'


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

export const formatPrice = (price: number, currency: string = 'EUR') => {
  return `${(price || 0).toFixed(2)} ${currency}`
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
