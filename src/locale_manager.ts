import en from './locales/en'
import sk from './locales/sk'
import { Locale } from './types'

export class LocaleManager {
  locale: string
  locales: { [id:string]: Locale }

  constructor() {
    this.locale = 'en'
    this.locales = { en, sk }
    this.t = this.t.bind(this)
    this.tc = this.tc.bind(this)
    this.setLocale = this.setLocale.bind(this)
  }

  t = <K extends keyof Locale>(key: K) => {
    return this.locales[this.locale][key]
  }

  tc = <K extends keyof Locale>(key: K, count: number) => {
    let suffix = 'none'
    if (count === 1) {
      suffix = 'one'
    } else if (count > 1 && count < 5) {
      suffix = 'few'
    } else if (count >= 5) {
      suffix = 'many'
    }

    const newKey = `${key}.${suffix}` as K
    return this.t(newKey)
  }

  setLocale(code: string, locale?: Locale) {
    if (this.locales[code]) {
      if (locale) {
        this.locales[code] = locale
      } else {
        throw new Error('Patterns LocaleManager: setLocale called with code for unknown Locale object')
      }
    }
    this.locale = code
  }
}

export const localeManager = new LocaleManager()
export const t = localeManager.t
export const tc = localeManager.tc
