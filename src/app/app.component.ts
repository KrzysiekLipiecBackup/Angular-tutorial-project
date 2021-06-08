import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    body: 'Long story about a brave hero dealing with the evil of this world!...',
    isFavorite: true,
    favoritesCount: 0
  }
  payments: any;
  viewMode = 'list';

  onFavoriteChanged(value: any) {
    console.log(value);
  }
  onLoad() {
    this.payments = [
      { id: 1, name: 'payment1 '},
      { id: 2, name: 'payment2 '},
      { id: 3, name: 'payment3 '},
      { id: 4, name: 'payment4 '},
      { id: 5, name: 'payment5 '},
      { id: 6, name: 'payment6 '}
    ]
  }

  trackPayment(index: any, payment: any) {
    return payment ? payment.id : undefined;
  }

  onAdd() {
    let Pos = this.payments.length + 1
    this.payments.push({ id: Pos, name: 'payment' + Pos + ' '});
  }

  onRemove(payment: any) {
    this.payments.splice(this.payments.indexOf(payment), 1);
  }

  onChange(payment: any) {
    payment.name = "changed";
  }
}


