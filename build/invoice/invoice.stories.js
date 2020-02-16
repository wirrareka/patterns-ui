import React, { useState } from "react";
import faker from 'faker';
import logo from '../assets/patterns-logo.png';
import Invoice, { DefaultPaymentMethods } from './invoice';
import InvoiceModel from '../models/invoice';
import Contact from '../models/contact';
import { formatDate, parseDate, formatPrice } from '../common';
import Currency from "../models/currency";
export default {
    title: 'Invoice'
};
var company = new Contact({
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
});
var customer = new Contact({
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
});
var randomPrice = faker.commerce.price();
var testInvoice = new InvoiceModel({
    code: 'I20201234',
    company: company,
    customer: customer,
    currency: new Currency({ name: 'Euro', symbol: '€' }),
    price: randomPrice,
    price_with_vat: randomPrice * 1.2,
    dueAt: faker.date.future(),
    note: faker.random.words(),
    items: [],
    datePosted: faker.date.past(),
    paymentMethods: DefaultPaymentMethods
});
export var AllFeatures = function () {
    var _a = useState(testInvoice), invoice = _a[0], setInvoice = _a[1];
    return React.createElement(Invoice, { formatDate: formatDate, parseDate: parseDate, formatPrice: formatPrice, invoice: invoice, logo: logo, paymentMethods: DefaultPaymentMethods, onChange: setInvoice });
};
//# sourceMappingURL=invoice.stories.js.map