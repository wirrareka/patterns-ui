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
import { Contact, Currency, Invoice, PaymentMethod } from '../../models';
import InvoiceView from './invoice_view';
import PatternApp from "../../demo_app";
import { FlexColumn, Toolbar } from "../../components";
import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import InvoicePrinter from "../../printers/invoice_printer";
import { Button } from "@blueprintjs/core";
import signature from '../../assets/signature.png';
import logo from '../../assets/patterns-logo.png';
export default {
    title: "Invoice"
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
var testInvoice = new Invoice({
    code: 'I20201234',
    vendor: PatternApp.settings.company,
    customer: customer,
    currency: PatternApp.settings.currency,
    price: randomPrice,
    price_with_vat: randomPrice * 1.2,
    dueAt: faker.date.future(),
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum risus, lacinia ut elit in, egestas laoreet nunc. Vivamus mollis consequat velit, et pulvinar nulla molestie at.\n  Quisque sit amet nunc in arcu euismod scelerisque. Suspendisse id imperdiet augue, elementum accumsan libero. Nulla tincidunt erat libero, eu ornare nisi aliquet id. Nulla in felis accumsan\n  risus molestie consectetur. Maecenas vel sapien euismod, tempus est quis, posuere massa. Aenean eget Cnibus lacus, et venenatis augue. jras scelerisque volutpat nisl, ut rutrum xusto\n  pellentesque eu. Vestibulum ut Cnibus massa. Vestibulum eGcitur eu massa vitae sollicitudin. Nulla aliquam ultricies odio, sed facilisis nunc porttitor ac. Nulla aliquet mattis neque et\n  porta. Etiam tempus dolor at erat aliquam sagittis. Praesent pharetra dolor nec tempor elementum.",
    items: [],
    datePosted: faker.date.past(),
    paymentMethods: [PaymentMethod.cash, PaymentMethod.bankTransfer],
    dueDate: faker.date.future(),
    signature: signature,
    logo: logo
});
export var AllFeatures = function () {
    var _a = useState(testInvoice), invoice = _a[0], setInvoice = _a[1];
    return React.createElement(InvoiceView, { editableCode: false, fetchNames: function (query) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, []];
            });
        }); }, logo: PatternApp.settings.logo, signature: PatternApp.settings.signature, document: invoice, onChange: function (property, value) {
            var clone = new Invoice(invoice.clone);
            clone[property] = value;
            setInvoice(clone);
        }, fetch: function (query) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [customer, genCustomer(), genCustomer(), genCustomer()]];
            });
        }); } });
};
export var Print = function () {
    var _a = useState(testInvoice), invoice = _a[0], setInvoice = _a[1];
    return React.createElement(FlexColumn, { flex: 1 },
        React.createElement(Toolbar, null,
            React.createElement(BlobProvider, { document: React.createElement(InvoicePrinter, { document: invoice }) }, function (_a) {
                var blob = _a.blob, url = _a.url, loading = _a.loading, error = _a.error;
                console.log('url', url, 'loading', loading);
                return React.createElement(Button, { icon: "print", text: "Print", onClick: function () {
                        var data = window.URL.createObjectURL(blob);
                        var link = document.createElement('a');
                        link.href = data;
                        link.download = "file.pdf";
                        link.click();
                        setTimeout(function () {
                            // For Firefox it is necessary to delay revoking the ObjectURL
                            window.URL.revokeObjectURL(data);
                        }, 100);
                    }, minimal: true, small: true, style: { height: 28, alignSelf: 'center' } });
            })),
        React.createElement(PDFViewer, { style: { height: '100vh' } },
            React.createElement(InvoicePrinter, { document: invoice })));
};
//# sourceMappingURL=invoice.stories.js.map