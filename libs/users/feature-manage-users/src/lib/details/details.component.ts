import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'pwc-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [{ provide: EDITFORM_TOKEN, useExisting: DetailsComponent }],
})
export class DetailsComponent {
  @Input() user: User | null = {} as User;
  settings = { title: 'User Kevin DeBryne' } as CrudFormCardSettings;
}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from '@pwc/shared/material';
import {
  CrudFormCardModule,
  CrudFormCardSettings,
  EDITFORM_TOKEN,
} from '@pwc/shared/ui';
import { User } from '@pwc/users/domain';
import { AddUserModule } from '../add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule,
    CrudFormCardModule,
    AddUserModule,
  ],
  exports: [DetailsComponent],
  declarations: [DetailsComponent],
})
export class DetailsModule {}
