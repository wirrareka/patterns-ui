export default class BaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(_data: any);
    get exists(): boolean;
    get clone(): any;
}
