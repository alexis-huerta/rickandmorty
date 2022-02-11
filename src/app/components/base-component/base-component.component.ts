import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base-component',
  template: ''
})
export class BaseComponentComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
