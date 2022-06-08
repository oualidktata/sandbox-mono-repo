import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'settings-view-end-user-support',
  templateUrl: './view-end-user-support.component.html',
  styleUrls: ['./view-end-user-support.component.scss'],
})
export class ViewEndUserSupportComponent {
  constructor() {}
}

@NgModule({
  imports: [CommonModule],
  exports: [ViewEndUserSupportComponent],
  declarations: [ViewEndUserSupportComponent],
  providers: [],
})
export class ViewEndUserSupportModule { }

