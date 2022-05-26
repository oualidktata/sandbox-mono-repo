import { Component, Input, NgModule } from '@angular/core';
import { CardModel, DashboardTileModule } from '@pwc/shared/ui';

@Component({
  selector: 'pwc-forecast-tile',
  templateUrl: './forecast-tile.component.html',
  styleUrls: ['./forecast-tile.component.scss'],
})
export class ForecastTileComponent {
  @Input() settings = {} as CardModel;
}

@NgModule({
  imports: [DashboardTileModule],
  exports: [ForecastTileComponent],
  declarations: [ForecastTileComponent],
  providers: [],
})
export class ForecastTileModule {}
