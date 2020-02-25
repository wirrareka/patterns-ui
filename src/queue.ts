import PromiseQueue from 'promise-queue'

export default class Queue extends PromiseQueue {
  constructor(maxConcurrent = 1) {
    super(maxConcurrent, Infinity)
  }

  get isDone() {
    return this.getPendingLength() === 0 && this.getQueueLength() === 0
  }
}
