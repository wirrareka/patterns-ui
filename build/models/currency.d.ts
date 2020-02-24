import BaseModel from './base_model';
export default class Currency extends BaseModel {
    id: string;
    code: string;
    name: string;
    symbol: string;
    constructor(data: any);
    static get euro(): Currency;
}
