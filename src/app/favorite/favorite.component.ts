import { Component, Input} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('favoritesCount') favoritesCount: number = 0;
  @Input('isFavorite') isFavorite: boolean = false;
  numberOfStars = 0;

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.numberOfStars = this.isFavorite ? 1 : 0;
  }
}
