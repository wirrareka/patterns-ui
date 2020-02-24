import Priceable from "./priceable";
export default interface LinePriceable extends Priceable {
    quantity: number;
    unitPriceWithVat: number;
    linePrice: number;
    linePriceWithVat: number;
}
