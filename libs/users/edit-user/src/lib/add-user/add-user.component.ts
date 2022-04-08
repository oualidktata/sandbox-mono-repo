import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '@pwc/users/domain';

@Component({
  selector: 'pwc-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnChanges {
  @Input() user: User | null = {} as User;

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    shipping: ['free', Validators.required],
  });

  hasUnitNumber = false;
  states = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'American Samoa', abbreviation: 'AS' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'District Of Columbia', abbreviation: 'DC' },
    { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
  ];
  constructor(private fb: FormBuilder) {}
  ngOnChanges(): void {
    this.addressForm.patchValue({
      firstName: this.user?.firstName,
      lastName:this.user?.lastName,
      createOn:this.user?.createdOn,
      company: this.user?.company,
      address: this.user?.address,
      address2: this.user?.address2,
      city: this.user?.city,
      state: this.user?.state,
      postalCode:this.user?.postalCode,
      shipping: this.user?.shipping,
      createdOn: this.user?.createdOn,
      active: this.user?.active,
    });
    console.log(`add-user.OnInit${this.user?.firstName}`);
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
