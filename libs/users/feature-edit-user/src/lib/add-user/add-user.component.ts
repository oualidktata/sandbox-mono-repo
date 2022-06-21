import { CommonModule } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  ElementRef,
  Input,
  NgModule,
  OnChanges,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { SharedMaterialModule } from '@pwc/shared/material';
import { UsersConfigurationModule } from '@pwc/users/configuration';
import { IInterestViewModel, User, UsersFacade } from '@pwc/users/domain';
import { Interest } from 'libs/users/domain/src/lib/entities/interest.model';
import { Observable } from 'rxjs';
import { startWith, map, filter, first } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'pwc-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnChanges {
  @Input() user: User = {} as User;
  @Input() allInterests=[] as IInterestViewModel[] ;

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
  separatorKeyCodes: number[] = [ENTER, COMMA];
  filteredInterests$: Observable<IInterestViewModel[]>;
  interests: IInterestViewModel[] = [];
  // allInterests: IInterestViewModel[] = [
  //   { id: 1, name: 'Technology' },
  //   { id: 2, name: 'Science' },
  //   { id: 3, name: 'Sports' },
  //   { id: 4, name: 'Language' },
  // ];
  @ViewChild('interestInput')
  interestInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.filteredInterests$ = this.interestsControl.valueChanges.pipe(
      //startWith([{ id: 3, name: 'Sports' }]),
      map((interest: Interest | null) =>
        interest
          ? this._filter(interest)
          : (this.allInterests as IInterestViewModel[])
      )
    );
  }

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
  remove(interest: IInterestViewModel): void {
    console.log(`remove.interest${JSON.stringify(interest)}`);
    this.interests = this.interests?.filter((i) => i.id != interest.id);
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    const interestToAdd = event.option.value as IInterestViewModel;
    console.log(`add.selected${JSON.stringify(interestToAdd)}`);
    if (!this.interests?.find(i=>i.id===interestToAdd.id)){
      this.interests?.push(interestToAdd);
      this.interestInput.nativeElement.value = '';
      this.interestsControl.setValue(null);
    }

  }
  private _filter(value: Interest): IInterestViewModel[] {
    const filterValue = value.name.toLowerCase();
    return this.allInterests.filter((i) =>
      i.name.toLowerCase().includes(filterValue)
    );
  }
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
      interestNames: this.getInterestsModel(this.user?.interests),
    });
    console.log(
      `add-user.ngOnChanges.Interests${JSON.stringify(this.user?.interests)}`
    );
  }

  getInterestsModel(interests:number[]){
    return this.allInterests.filter(i=>interests.includes(i.id))
  }

  onSubmit(): void {
    alert('Thanks!');
  }
}

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AddUserComponent],
  declarations: [AddUserComponent],
  providers: [],
})
export class AddUserModule {}
