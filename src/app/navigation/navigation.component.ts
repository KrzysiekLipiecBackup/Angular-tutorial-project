import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output('press') press = new EventEmitter();
  isSelected = false;

  onClick() {
    this.press.emit({ newValue: this.isSelected});
  }

}
