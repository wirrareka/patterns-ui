import TimeStamped from '../interfaces/timestamped';
export default class BaseModel implements TimeStamped {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(_data: any);
    get exists(): boolean;
    get clone(): any;
}
