import { Component } from '@angular/core';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  paymentTypeCategories = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Entertainment' },
    { id: 3, name: 'Health' },
    { id: 4, name: 'Tax' },
    { id: 5, name: 'Home related' },
    { id: 6, name: 'Other' },
 ];
 log(x: any) { console.log(x); }

 submit(f: any) { console.log(f); }
}
