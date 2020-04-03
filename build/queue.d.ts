import PromiseQueue from 'promise-queue';
export default class Queue extends PromiseQueue {
    constructor(maxConcurrent?: number);
    get isDone(): boolean;
}
