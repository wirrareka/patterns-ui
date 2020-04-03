import Itemable from "./itemable";
import LinePriceable from "./line_priceable";
import TimeStamped from "./timestamped";
export default interface Sellable extends Itemable, LinePriceable, TimeStamped {
}
