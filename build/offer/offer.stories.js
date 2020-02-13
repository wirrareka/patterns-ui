import React, { useState } from "react";
import faker from 'faker';
import logo from '../assets/patterns-logo.png';
import Offer, { DefaultPaymentMethods } from './offer';
import OfferModel from '../models/offer';
import Contact from '../models/contact';
import { formatDate, parseDate, formatPrice } from '../common';
import Currency from "../models/currency";
export default {
    title: "Offer"
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
var testOffer = new OfferModel({
    code: 'CP20201234',
    company: company,
    customer: customer,
    currency: new Currency({ name: 'Euro', symbol: '€' }),
    price: randomPrice,
    price_with_vat: randomPrice * 1.2,
    dueAt: faker.date.future(),
    note: faker.random.words(),
    items: [],
    datePosted: faker.date.past(),
    paymentMethods: DefaultPaymentMethods,
    validTill: faker.date.future()
});
export var AllFeatures = function () {
    var _a = useState(testOffer), offer = _a[0], setOffer = _a[1];
    return React.createElement(Offer, { formatDate: formatDate, parseDate: parseDate, formatPrice: formatPrice, offer: offer, logo: logo, paymentMethods: DefaultPaymentMethods, onChange: setOffer });
};
//# sourceMappingURL=offer.stories.js.map