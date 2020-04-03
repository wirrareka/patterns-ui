import Codeable from './codeable';
export default interface Itemable extends Codeable {
    id: string;
    name: string;
}
