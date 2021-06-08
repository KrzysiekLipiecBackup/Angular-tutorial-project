import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent{
  @Input('isFavorite') isFavorite = false;
  @Output('changes') changes = new EventEmitter<string>();
  movieTitle: string = '';
  numberOfStars = 0;
  payments = [1,2];

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.numberOfStars = this.isFavorite ? 1 : 0;
    this.changes.emit("emit from fav");
  }


}
