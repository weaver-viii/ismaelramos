import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EasterEggService {
  private counter: number;

  public refreshCounter$: EventEmitter<any>;

  constructor() {
    this.refreshCounter$ = new EventEmitter();
    this.counter = 2;
  }

  getCounter() {
    return this.counter;
  }

  decreaseCounter() {
    if (this.counter > 0) {
      this.counter--;
      this.refreshCounter$.emit(this.counter);
    }
  }
}
