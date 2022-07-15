import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, NgModule, Input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedMaterialModule } from '@pwc/shared/material';
import { User } from '@pwc/users/domain';

@Component({
  selector: 'pwc-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserComponent {
  @Input() user: User = {} as User;
  constructor(private fb: FormBuilder) {
    
  }
  userForm = this.fb.group({
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
    interests: [],
  });

  interestsControl = this.userForm.controls['interests'];

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

//   add(event: MatChipInputEvent) {
//     console.log(`add.Value${event.value}`);
//     const value = (event.value || '').trim();
//     console.log(`add.Value${event.value}`);
//     console.log(
//       `add.this.interestsControl.Value${this.interestsControl.value}`
//     );
// const alreadySelected=false;
//     this.filteredInterests$.pipe(
//       map(items=>items.find(item=>item.name===event.value))
//     ).subscribe(interest=> alreadySelected)
//     if (!alreadySelected) {
//       const interestToAdd = this.allInterests.find((i) => i.id === Number(value))||null;
//       this.interests.push(interestToAdd!);
//       this.interestsControl.setValue({ ...this.interestsControl.value, value });
//     }
//   }


  //TODO: leverage observables/subjects for interests
  //https://stackblitz.com/edit/how-to-save-selected-object-using-mat-chip-and-autocomplete-in
  //https://www.npmjs.com/package/ngx-chips
  ngOnChanges(): void {
    this.userForm.patchValue({
      firstName: this.user?.firstName,
      lastName: this.user?.lastName,
      createOn: this.user?.createdOn,
      company: this.user?.company,
      address: this.user?.address,
      address2: this.user?.address2,
      city: this.user?.city,
      state: this.user?.state,
      postalCode: this.user?.postalCode,
      shipping: this.user?.shipping,
      createdOn: this.user?.createdOn,
      active: this.user?.active,
      interests: this.user?.interestNames,
    });
    console.log(
      `add-user.ngOnChanges.Interests${JSON.stringify(this.user?.interestNames)}`
    );
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}
@NgModule({
  imports: [CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [EditUserComponent],
  declarations: [EditUserComponent],
  providers: [],
})
export class EditUserModule { }

