var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState } from "react";
import faker from 'faker';
// import logo from '../assets/patterns-logo.png'
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
    return React.createElement(Offer, { formatDate: formatDate, parseDate: parseDate, formatPrice: formatPrice, offer: offer, 
        // logo={logo}
        paymentMethods: DefaultPaymentMethods, onChange: setOffer, fetch: function (query) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, [customer]];
        }); }); } });
};
//# sourceMappingURL=offer.stories.js.map