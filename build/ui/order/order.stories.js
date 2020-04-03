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
import uuid from 'uuid';
import { PDFViewer, BlobProvider } from '@react-pdf/renderer';
import { Button } from '@blueprintjs/core';
import { FlexColumn, FlexRow as Row, Toolbar } from '../../components';
// import logo from '../assets/patterns-logo.png'
import { Contact, Currency, Order, PaymentMethod, DocumentItem } from '../../models';
import OrderView from './order_view';
import CustomOrderView from './custom_order_view';
import PatternApp from "../../demo_app";
import OrderPrinter from '../../printers/order_printer';
import CustomOrderPrinter from '../../printers/custom_order_printer';
import bigDecimal from 'js-big-decimal';
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
var items = [
    {
        "code": "",
        "createdAt": "2020-03-09T14:53:11.550Z",
        "currency": "",
        "index": 0,
        "linePrice": "1047",
        "linePriceWithVat": "0",
        "name": "Heat 70.44.13",
        "price": "1047.000",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:53:11.550Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:53:33.440Z",
        "currency": "",
        "index": 1,
        "linePrice": "180",
        "linePriceWithVat": "180",
        "name": "obostavba",
        "price": "180",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:53:33.440Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:53:53.286Z",
        "currency": "",
        "index": 2,
        "linePrice": "45.65",
        "linePriceWithVat": "45.65",
        "name": "Silcadur 6,5 kg",
        "price": "45.650",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:53:53.286Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:54:27.082Z",
        "currency": "",
        "index": 3,
        "linePrice": "56",
        "linePriceWithVat": "56",
        "name": "luft 600x9 čierna",
        "price": "28.000",
        "quantity": 2,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:54:27.082Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:55:03.702Z",
        "currency": "",
        "index": 4,
        "linePrice": "15.35",
        "linePriceWithVat": "15.35",
        "name": "mriežka 170x490 ",
        "price": "15.350",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:55:03.702Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:55:36.271Z",
        "currency": "",
        "index": 5,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "mriežka 170x490 bž",
        "price": "19.32",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:55:36.271Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:56:07.166Z",
        "currency": "",
        "index": 6,
        "linePrice": "483",
        "linePriceWithVat": "483",
        "name": "isol rath 1000x610x30",
        "price": "21",
        "quantity": 23,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:56:07.166Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:56:30.959Z",
        "currency": "",
        "index": 7,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "mriežka 17x17",
        "price": "15",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:56:30.959Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:56:45.551Z",
        "currency": "",
        "index": 8,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "izolačné rúry 125 mm",
        "price": "6.96",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:56:45.551Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:57:06.105Z",
        "currency": "",
        "index": 9,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "silcawool 25",
        "price": "0.2",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:57:06.105Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:57:23.607Z",
        "currency": "",
        "index": 10,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "T kus 125 mm",
        "price": "10.37",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:57:23.607Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:57:34.636Z",
        "currency": "",
        "index": 11,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "Y kus 125 mm",
        "price": "10.37",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:57:34.636Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:57:53.502Z",
        "currency": "",
        "index": 12,
        "linePrice": "15.6",
        "linePriceWithVat": "15.6",
        "name": "sieťka",
        "price": "1.56",
        "quantity": 10,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:57:53.502Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:58:09.995Z",
        "currency": "",
        "index": 13,
        "linePrice": "45.74",
        "linePriceWithVat": "45.74",
        "name": "omietka ortner",
        "price": "45.74",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:58:09.995Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:58:24.098Z",
        "currency": "",
        "index": 14,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "oc. klapka o150 mm",
        "price": "12",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:58:24.098Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:58:36.760Z",
        "currency": "",
        "index": 15,
        "linePrice": "68",
        "linePriceWithVat": "68",
        "name": "rúra 500 mm(priemer 150)",
        "price": "34",
        "quantity": 2,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:58:36.760Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:58:49.574Z",
        "currency": "",
        "index": 16,
        "linePrice": "34.5",
        "linePriceWithVat": "34.5",
        "name": "rúra 330mm(priemer 180)",
        "price": "34.5",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:58:49.574Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:59:04.592Z",
        "currency": "",
        "index": 17,
        "linePrice": "67.74",
        "linePriceWithVat": "67.74",
        "name": "koleno 45 st 150 mm",
        "price": "33.87",
        "quantity": 2,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:59:04.592Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:59:29.195Z",
        "currency": "",
        "index": 18,
        "linePrice": "31.8",
        "linePriceWithVat": "31.8",
        "name": "redukcia 150/180 mm",
        "price": "31.8",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:59:29.195Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:59:42.192Z",
        "currency": "",
        "index": 19,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "spojky",
        "price": "5.68",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:59:42.192Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T14:59:56.838Z",
        "currency": "",
        "index": 20,
        "linePrice": "10",
        "linePriceWithVat": "10",
        "name": "povrazec 16 mm",
        "price": "10",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T14:59:56.838Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T15:00:07.165Z",
        "currency": "",
        "index": 21,
        "linePrice": "29.7",
        "linePriceWithVat": "29.7",
        "name": "flexi lepidlo 25kg",
        "price": "9.9",
        "quantity": 3,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T15:00:07.165Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T15:00:32.163Z",
        "currency": "",
        "index": 22,
        "linePrice": "11.6",
        "linePriceWithVat": "11.6",
        "name": "tmel kachliarsky",
        "price": "11.6",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T15:00:32.163Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T15:01:30.947Z",
        "currency": "",
        "index": 23,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "ventilátor 600",
        "price": "254",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T15:01:30.947Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T15:01:42.785Z",
        "currency": "",
        "index": 24,
        "linePrice": "0",
        "linePriceWithVat": "0",
        "name": "hrdlo na mriežku",
        "price": "4.4",
        "quantity": 0,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T15:01:42.785Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T15:01:52.936Z",
        "currency": "",
        "index": 25,
        "linePrice": "45",
        "linePriceWithVat": "45",
        "name": "prívod vzduchu",
        "price": "45",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T15:01:52.936Z",
        "vat": 0,
        "vatPrice": "0",
        "vatTotalOnly": true
    },
    {
        "code": "",
        "createdAt": "2020-03-09T15:02:37.134Z",
        "currency": "",
        "index": 26,
        "linePrice": "800",
        "linePriceWithVat": "960",
        "name": "PRÁCA",
        "price": "800.000",
        "quantity": 1,
        "unit": "",
        "unitPriceWithVat": "0",
        "updatedAt": "2020-03-09T15:02:37.134Z",
        "vat": 20,
        "vatPrice": "160",
        "vatTotalOnly": true
    }
].map(function (item) { return new DocumentItem(item); });
var genCustomer = function () { return new Contact({
    id: uuid.v4(),
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
    country: faker.address.country(),
    businessId: '123456789',
    vatPayerId: '123456789',
    vatId: '123456789'
}); };
var customer = genCustomer();
var randomPrice = faker.commerce.price();
var item = genItem(23);
item.name = "";
var testOrder = new Order({
    code: 'O20201234',
    vendor: PatternApp.settings.company,
    customer: customer,
    currency: PatternApp.settings.currency,
    price: randomPrice,
    price_with_vat: randomPrice * 1.2,
    dueAt: faker.date.future(),
    note: faker.random.words(),
    signature: PatternApp.settings.signature,
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
        item,
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
        genItem(80),
        genItem(91),
        genItem(92),
        genItem(93),
        genItem(94),
        genItem(95),
        genItem(96),
        genItem(97),
        genItem(98),
        genItem(99),
        genItem(100),
        genItem(101),
        genItem(102),
        genItem(103),
        genItem(104),
        genItem(105),
        genItem(106),
        genItem(107),
        genItem(108),
        genItem(109),
        genItem(110),
        genItem(111),
        genItem(112),
        genItem(113),
        genItem(114),
        genItem(115),
        genItem(116),
        genItem(117),
        genItem(118),
        genItem(119),
        genItem(120),
        genItem(121),
        genItem(122),
    ],
    datePosted: faker.date.past(),
    paymentMethods: [PaymentMethod.cash, PaymentMethod.bankTransfer],
    validTill: faker.date.future(),
    issuedBy: faker.name.firstName() + " " + faker.name.lastName()
});
var customOrder = new Order({
    code: 'O20201234',
    vendor: PatternApp.settings.company,
    customer: customer,
    currency: PatternApp.settings.currency,
    price: randomPrice,
    price_with_vat: randomPrice * 1.2,
    dueAt: faker.date.future(),
    note: faker.random.words(),
    signature: PatternApp.settings.signature,
    items: items,
    datePosted: faker.date.past(),
    paymentMethods: [PaymentMethod.cash, PaymentMethod.bankTransfer],
    validTill: faker.date.future(),
    issuedBy: faker.name.firstName() + " " + faker.name.lastName()
});
var people = [customer, genCustomer(), genCustomer(), genCustomer()];
export var AllFeatures = function () {
    var _a = useState(testOrder), order = _a[0], setOrder = _a[1];
    return React.createElement(OrderView, { editableCode: true, logo: PatternApp.settings.logo, signature: PatternApp.settings.signature, document: order, onChange: function (property, value) {
            var clone = new Order(order.clone);
            clone[property] = value;
            setOrder(clone);
        }, fetch: function (query) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, people];
            });
        }); }, fetchNames: function (query) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, people];
            });
        }); } });
};
export var CustomizedOrder = function () {
    var _a = useState(customOrder), order = _a[0], setOrder = _a[1];
    return React.createElement(CustomOrderView, { free: true, editableCode: false, logo: PatternApp.settings.logo, signature: PatternApp.settings.signature, detail: React.createElement(Row, null,
            React.createElement(FlexColumn, { flex: 1, style: { paddingTop: 24 } },
                React.createElement(Row, null, "www.gargo.sk"),
                React.createElement(Row, null, "gargo@gargo.sk"),
                React.createElement(Row, null, "telef\u00F3n predaj\u0148a: 0911 109 785"))), document: order, onChange: function (property, value) {
            var clone = new Order(order.json);
            clone[property] = value;
            setOrder(clone);
        }, fetch: function (query) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, people];
            });
        }); }, fetchNames: function (query) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, people];
            });
        }); } });
};
export var Print = function () {
    return React.createElement(FlexColumn, { flex: 1 },
        React.createElement(Toolbar, null,
            React.createElement(BlobProvider, { document: React.createElement(OrderPrinter, { document: testOrder }) }, function (_a) {
                var blob = _a.blob, url = _a.url, loading = _a.loading, error = _a.error;
                console.log('url', url, 'loading', loading);
                if (loading) {
                    return React.createElement("div", null, "loading");
                }
                return React.createElement(Button, { icon: "print", text: "Print", onClick: function () {
                        window.open(url);
                        // const data = window.URL.createObjectURL(blob)
                        // var link = document.createElement('a')
                        // link.href = data
                        // link.download="file.pdf"
                        // link.click()
                        // setTimeout(function(){
                        //   // For Firefox it is necessary to delay revoking the ObjectURL
                        //   window.URL.revokeObjectURL(data);
                        // }, 100);
                    }, minimal: true, small: true, style: { height: 28, alignSelf: 'center' } });
            })),
        React.createElement(PDFViewer, { style: { height: '100vh' } },
            React.createElement(OrderPrinter, { document: testOrder })));
};
export var CustomPrint = function () {
    return React.createElement(FlexColumn, { flex: 1 },
        React.createElement(PDFViewer, { style: { height: '100vh' } },
            React.createElement(CustomOrderPrinter, { free: true, document: testOrder, quote: false, itemsPrice: new bigDecimal(10), workPrice: new bigDecimal(10) })));
};
export var CustomPrintQuote = function () {
    return React.createElement(FlexColumn, { flex: 1 },
        React.createElement(PDFViewer, { style: { height: '100vh' } },
            React.createElement(CustomOrderPrinter, { document: customOrder, quote: true, itemsPrice: new bigDecimal(10), workPrice: new bigDecimal(10) })));
};
//# sourceMappingURL=order.stories.js.map