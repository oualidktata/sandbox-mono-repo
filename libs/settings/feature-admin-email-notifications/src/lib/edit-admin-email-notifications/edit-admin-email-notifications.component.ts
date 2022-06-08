import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'settings-edit-admin-email-notifications',
  templateUrl: './edit-admin-email-notifications.component.html',
  styleUrls: ['./edit-admin-email-notifications.component.scss'],
})
export class EditAdminEmailNotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [],
  exports: [],
  declarations: [EditAdminEmailNotificationsComponent],
  providers: [],
})
export class EditAdminEmailNotificationsModule { }

