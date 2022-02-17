import { Component } from '@angular/core';
import { CardModel } from '@pwc/shared/ui';

@Component({
  selector: 'pwc-totals-tile',
  templateUrl: './totals-tile.component.html',
  styleUrls: ['./totals-tile.component.scss'],
})
export class TotalsTileComponent {
  cardSettings: CardModel = new CardModel(2, 1, 'Totals Tile');
}