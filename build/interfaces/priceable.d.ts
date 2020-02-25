import Vatable from "./vatable";
import Unitable from "./unitable";
export default interface Priceable extends Vatable, Unitable {
    price: number;
    currency: string;
}
