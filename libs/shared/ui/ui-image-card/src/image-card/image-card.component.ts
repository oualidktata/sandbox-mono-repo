import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IImageSettings {
  source: string;
  height: number;
  width: number;
}

@Component({
  selector: 'pwc-image-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {
  @Input() settings: IImageSettings = {
    source: './assets/default.png',
    height: 100,
    width: 100,
  };
}
