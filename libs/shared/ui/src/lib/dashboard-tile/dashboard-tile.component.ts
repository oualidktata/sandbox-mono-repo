import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { SharedMaterialModule } from '@pwc/shared/material';
import { CardModel } from './models/card.model';
@Component({
  selector: 'pwc-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
})
export class DashboardTileComponent implements OnInit {
  @Input() settings: CardModel = new CardModel(3, 3, 'default title');
  @Output() refresh = new EventEmitter<string>();
  vm: CardModel = new CardModel(1, 1, 'inital model');
  text: CardModel = new CardModel(1, 2, 'inital model');
  ngOnInit(): void {
    this.vm = new CardModel(3, 3, 'title');
    this.vm.cols = this.settings.cols ?? 1;
    this.vm.rows = this.settings.rows ?? 2;
    this.vm.title = this.settings.title ?? 'defaultTitle';
  }
  onRefresh() {
    this.text = new CardModel(1, 1, 'inital model');
  }
}

@NgModule({
  imports: [CommonModule, SharedMaterialModule],
  declarations: [DashboardTileComponent],
  exports: [DashboardTileComponent],
})
export class DashboardTileModule {}
