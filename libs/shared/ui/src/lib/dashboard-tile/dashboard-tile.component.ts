import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from './models/card.model';
@Component({
  selector: 'pwc-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
})
export class DashboardTileComponent implements OnInit {
  @Input() cardModel: CardModel = new CardModel(3, 3, 'default title');
  @Output() refresh = new EventEmitter<string>();
  vm: CardModel = new CardModel(1, 1, 'inital model');
  text: CardModel = new CardModel(1, 1, 'inital model');
  ngOnInit(): void {
    this.vm = new CardModel(3,3, 'title');
    this.vm.cols = this.cardModel.cols ?? 1;
    this.vm.rows = this.cardModel.rows ?? 2;
    this.vm.title = this.cardModel.title ?? 'defaultTitle';
  }
  onRefresh() {
    this.text = new CardModel(1, 1, 'inital model');
  }
}
