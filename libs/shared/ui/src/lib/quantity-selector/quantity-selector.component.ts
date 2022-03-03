import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'pwc-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantitySelectorComponent {
  quantity = 0;
  @Input() increment = 0;
  @Input() superiorEdge = 100;
  @Input() inferiorEdge = 0;
  hasSuperiorEdgeError = this.quantity > this.superiorEdge;
  hasInferiorEdgeError = this.quantity < this.inferiorEdge;

  onAdd = () => {
    if (this.quantity + this.increment > this.superiorEdge) {
      //const message = `exceeded superior edge ${this.superiorEdge}`;
      //console.log(message);
      //this.error = message;
      return;
    }
    this.quantity += this.increment;
    console.log(`added ${this.increment} to ${this.quantity}`);
  };

  onRemove = () => {
    this.quantity -= this.increment;
  };
}
