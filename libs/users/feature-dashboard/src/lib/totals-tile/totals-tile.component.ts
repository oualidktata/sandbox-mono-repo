import { Component, Input, NgModule } from '@angular/core';
import { CardModel, DashboardTileModule } from '@pwc/shared/ui';

@Component({
  selector: 'pwc-totals-tile',
  templateUrl: './totals-tile.component.html',
  styleUrls: ['./totals-tile.component.scss'],
})
export class TotalsTileComponent {
  @Input() settings: CardModel = new CardModel(2, 1, 'Totals Tile');
}

@NgModule({
  imports: [DashboardTileModule],
  exports: [TotalsTileComponent],
  declarations: [TotalsTileComponent],
  providers: [],
})
export class TotalsTileModule {}
