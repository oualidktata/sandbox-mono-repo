import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CrudFormCardSettings,
  EditForm,
  EDITFORM_TOKEN,
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
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(15)]],
      lastName: [null, [Validators.required, Validators.minLength(15)]],
      company: [null, [Validators.required, Validators.minLength(15)]],

      businessAddress: [null],
      country: [null, [Validators.required, Validators.minLength(10)]],
    });
  }
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
