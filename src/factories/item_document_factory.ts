import { Invoice, Order } from "../models"
import PatternApp from '../pattern_app'

export default class ItemDocumentFactory {
  get invoice() {
    return new Invoice({
      vendor: PatternApp.settings.company
    })
  }

  get order() {
    return new Order({
      vendor: PatternApp.settings.company
    })
  }
}