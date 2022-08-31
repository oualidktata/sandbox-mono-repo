import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwc-edit-ui-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-ui-settings.component.html',
  styleUrls: ['./edit-ui-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUiSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
