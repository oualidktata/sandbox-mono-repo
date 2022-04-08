import { Component, ChangeDetectionStrategy, Input, Output,EventEmitter } from '@angular/core';
import { QuantitySelectorSettings } from './models/quantity-selector.model';



@Component({
  selector: 'pwc-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantitySelectorComponent {
  @Input() settings: QuantitySelectorSettings = {
    quantity: 0,
    increment: 0,
    superiorEdge: 100,
    inferiorEdge: 0,
  };
  hasSuperiorEdgeError = this.settings.quantity > this.settings.superiorEdge;
  hasInferiorEdgeError = this.settings.quantity < this.settings.inferiorEdge;
@Output() quantityAddedEvent= new EventEmitter<number>();
@Output() quantityRemovedEvent= new EventEmitter<number>();

  onAdd = () => {
    if (
      this.settings.quantity + this.settings.increment >
      this.settings.superiorEdge
    ) {
      const message = `exceeded superior edge ${this.settings.superiorEdge}`;
      console.log(message);
      //this.error = message;
      return;
    }
    this.settings.quantity += this.settings.increment;
    console.log(
      `added ${this.settings.increment} to ${this.settings.quantity}`
    );
    this.quantityAddedEvent.emit(this.settings.quantity);
  };

  onRemove = () => {
    this.settings.quantity -= this.settings.increment;
    this.quantityRemovedEvent.emit(this.settings.quantity);
  };
}
