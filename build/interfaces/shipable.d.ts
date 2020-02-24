export default interface Shipable {
    deliveryDate: Date;
    shippingDate: Date;
    shippingPrice: number;
    shippingPriceWithVat: number;
    shippingReference: string;
    shippingService: string;
    weight: number;
}
