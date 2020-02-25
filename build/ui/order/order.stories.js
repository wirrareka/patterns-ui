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
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@blueprintjs/core';
import { FlexColumn, Toolbar } from '../../components';
// import logo from '../assets/patterns-logo.png'
import { Contact, Currency, Order, PaymentMethod, DocumentItem } from '../../models';
import OrderView from './order_view';
import PatternApp from "../../demo_app";
import OrderPrinter from '../../printers/order_printer';
export default {
    title: "Order"
};
var genItem = function (index) {
    return new DocumentItem({
        index: index,
        code: "test-item-" + index,
        name: "Test Item #" + index,
        unit: 'pcs.',
        currency: Currency.euro.symbol,
        price: 100,
        quantity: 10,
        vat: 20,
        unitPriceWithVat: 120,
        linePrice: 1000,
        linePriceWithVat: 1200
    });
};
var genCustomer = function () { return new Contact({
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
}); };
var customer = genCustomer();
var randomPrice = faker.commerce.price();
var testOrder = new Order({
    code: 'O20201234',
    vendor: PatternApp.settings.company,
    customer: customer,
    currency: PatternApp.settings.currency,
    price: randomPrice,
    price_with_vat: randomPrice * 1.2,
    dueAt: faker.date.future(),
    note: faker.random.words(),
    items: [
        genItem(0),
        genItem(1),
        genItem(2),
        genItem(3),
        genItem(4),
        genItem(5),
        genItem(6),
        genItem(7),
        genItem(8),
        genItem(9),
        genItem(10),
        genItem(11),
        genItem(12),
        genItem(13),
        genItem(14),
        genItem(15),
        genItem(16),
        genItem(17),
        genItem(18),
        genItem(19),
        genItem(20),
        genItem(21),
        genItem(22),
        genItem(23),
        genItem(24),
        genItem(25),
        genItem(26),
        genItem(27),
        genItem(28),
        genItem(29),
        genItem(30),
        genItem(31),
        genItem(32),
        genItem(33),
        genItem(34),
        genItem(35),
        genItem(36),
        genItem(37),
        genItem(38),
        genItem(39),
        genItem(40),
        genItem(41),
        genItem(42),
        genItem(43),
        genItem(44),
        genItem(45),
        genItem(46),
        genItem(47),
        genItem(48),
        genItem(49),
        genItem(50),
        genItem(51),
        genItem(52),
        genItem(53),
        genItem(54),
        genItem(55),
        genItem(56),
        genItem(57),
        genItem(58),
        genItem(59),
        genItem(60),
        genItem(61),
        genItem(62),
        genItem(63),
        genItem(64),
        genItem(65),
        genItem(66),
        genItem(67),
        genItem(68),
        genItem(69),
        genItem(70),
        genItem(71),
        genItem(72),
        genItem(73),
        genItem(74),
        genItem(75),
        genItem(76),
        genItem(77),
        genItem(78),
        genItem(79),
        genItem(80),
        genItem(81),
        genItem(82),
        genItem(83),
        genItem(84),
        genItem(85),
        genItem(86),
        genItem(87),
        genItem(88),
        genItem(89),
    ],
    datePosted: faker.date.past(),
    paymentMethods: [PaymentMethod.cash, PaymentMethod.bankTransfer],
    validTill: faker.date.future()
});
export var AllFeatures = function () {
    var _a = useState(testOrder), order = _a[0], setOrder = _a[1];
    return React.createElement(OrderView, { logo: PatternApp.settings.logo, document: order, onChange: function (property, value) {
            var clone = new Order(order.clone);
            clone[property] = value;
            setOrder(clone);
        }, fetch: function (query) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [customer, genCustomer(), genCustomer(), genCustomer()]];
            });
        }); } });
};
export var Print = function () {
    return React.createElement(FlexColumn, { flex: 1 },
        React.createElement(Toolbar, null,
            React.createElement(PDFDownloadLink, { style: { alignSelf: 'center' }, document: React.createElement(OrderPrinter, { document: testOrder }), fileName: "somename.pdf" }, function (_a) {
                var blob = _a.blob, url = _a.url, loading = _a.loading, error = _a.error;
                console.log('url', url, 'loading', loading);
                return React.createElement(Button, { icon: "print", text: "Print", minimal: true, small: true, style: { height: 28 } });
            })),
        React.createElement(PDFViewer, { style: { height: '100vh' } },
            React.createElement(OrderPrinter, { document: testOrder })));
};
//# sourceMappingURL=order.stories.js.map