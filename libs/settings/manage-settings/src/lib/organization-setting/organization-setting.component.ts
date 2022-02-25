import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudFormCardSettings, EditForm, EDITFORM_TOKEN } from '@pwc/shared/ui';

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
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
  firstName: [null, [Validators.required, Validators.minLength(15)]],
  lastName: [null, [Validators.required, Validators.minLength(15)]],

      businessAddress: [null],
      country: [null, [Validators.required, Validators.minLength(10)]],
    });
  }
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
