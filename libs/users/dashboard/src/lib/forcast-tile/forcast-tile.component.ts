import { Component, Input } from '@angular/core';
import { CardModel } from '@pwc/shared/ui';

@Component({
  selector: 'pwc-forcast-tile',
  templateUrl: './forcast-tile.component.html',
  styleUrls: ['./forcast-tile.component.scss'],
})
export class ForcastTileComponent {
  @Input() settings = {} as CardModel;
  //settings=
}