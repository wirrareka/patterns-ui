import { Named } from '../interfaces';
import BaseModel from './base_model';
import Contact from './contact';
export default class User extends BaseModel implements Named {
    name: string;
    email: string;
    isActive: boolean;
    color: string;
    note: string;
    role: string;
    contact: Contact;
    constructor(_data: any);
}
