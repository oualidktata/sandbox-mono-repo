import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedMaterialModule } from '@pwc/shared/material';
import {
  CrudFormCardModule,
  CrudFormCardSettings,
  EditForm,
  EDITFORM_TOKEN,
  QuantitySelectorModule,
  QuantitySelectorSettings,
} from '@pwc/shared/ui';

@Component({
  selector: 'pwc-organization-setting',
  templateUrl: './organization-setting.component.html',
  styleUrls: ['./organization-setting.component.scss'],
  providers: [
    { provide: EDITFORM_TOKEN, useExisting: OrganizationSettingComponent },
  ],
})
export class OrganizationSettingComponent implements EditForm {
  form: FormGroup;
  settings = { title: 'Organization Settings' } as CrudFormCardSettings;
  bridgeSelectorSettings: QuantitySelectorSettings = {
    quantity: 0,
    increment: 1,
    inferiorEdge: 0,
    superiorEdge: 100,
  };
  peopleSelectorSettings: QuantitySelectorSettings = {
    quantity: 500,
    increment: 100,
    inferiorEdge: 100,
    superiorEdge: 1000,
  };
  //quantity from selector
  bridgeSelectedQuantity = 0;
  peopleSelectedQuantity = 0;
  invalid!: boolean;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(15)]],
      lastName: [null, [Validators.required, Validators.minLength(15)]],
      company: [null, [Validators.required, Validators.minLength(15)]],

      businessAddress: [null],
      country: [null, [Validators.required, Validators.minLength(10)]],
    });
  }
  delete = () => {
    console.log();
  };
  addPeople = (quantity: number) => {
    console.log('new people after addition');
    this.peopleSelectedQuantity = quantity;
  };
  reducePeople = (quantity: number) => {
    console.log('new people after deletion');
    this.peopleSelectedQuantity = quantity;
  };
  addBridges = (quantity: number) => {
    console.log('new people after addition');
    this.bridgeSelectedQuantity = quantity;
  };
  reduceBridges = (quantity: number) => {
    console.log('new people after deletion');
    this.bridgeSelectedQuantity = quantity;
  };

  edit() {
    console.log('editing organization clicked!');
  }
  cancel() {
    console.log('editing organization clicked!');
  }
  save() {
    console.log('saving organization settings!');
  }

  load() {
    console.log('editing organization clicked!');
  }
}

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule,SharedMaterialModule,CrudFormCardModule,QuantitySelectorModule],
  exports: [OrganizationSettingComponent],
  declarations: [OrganizationSettingComponent],
  providers: [],
})
export class OrganizationSettingModule { }
