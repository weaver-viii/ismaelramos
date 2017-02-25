import {Injectable, EventEmitter} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class EasterEggService {
  private counter: number;

  public refreshCounter$: EventEmitter<any>;

  constructor() {
    this.refreshCounter$ = new EventEmitter();
    this.counter = environment.numberOfEggs;
  }

  getCounter() {
    return this.counter;
  }

  decreaseCounter() {
    if (this.counter > 0) {
      this.counter--;
      this.refreshCounter$.emit(this.counter);
      if (this.counter === 0) {
        this.counter = environment.numberOfEggs;
      }
    }
  }
}
