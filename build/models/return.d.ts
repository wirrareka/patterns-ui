import BaseModel from './base_model';
import { Returnable } from '../interfaces';
export default class Return extends BaseModel implements Returnable {
    returnDate: Date;
    condition: string;
    costs: number;
    result: string;
    constructor(_data: any);
}
