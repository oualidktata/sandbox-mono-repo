import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pwc-view-ui-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-ui-settings.component.html',
  styleUrls: ['./view-ui-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewUiSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
