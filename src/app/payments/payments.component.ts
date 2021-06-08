import { Component } from '@angular/core';
import { PaymentsService } from './payments.service';

@Component({
  selector: 'payments',
  template: `
    <p></p>
    <button (click)="onSave($event)">Save</button>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <p></p>
    {{ payment.name | uppercase | lowercase }} <br/>
    {{ payment.numberOfItems | number }} <br/>
    {{ payment.weight | number:'1.3-3' }} <br/>
    {{ payment.price | currency:'PLN' }} <br/>
    {{ payment.date | date:'shortDate' }} <br/>
    `
})

export class PaymentsComponent {
  isActive = true;
  numberOfClicks: number = 0 ;
  email: any = 'test@example.com';
  payment = {
    name: "Orang",
    weight: 1.2711,
    numberOfItems: 72345,
    price: 12.50,
    date: new Date(2021, 5, 21)
  }


  onKeyUp() {
    console.log(this.email);
  }

  onSave($event: any) {
    this.numberOfClicks++;
    console.log("Clicked ", this.numberOfClicks, " times");
    console.log("Event: ", $event);
  }
}
