// import {
//   Component,
//   OnInit,
//   ChangeDetectionStrategy,
//   NgModule,
// } from '@angular/core';
// import { MatChipInputEvent } from '@angular/material/chips';
// import { SharedMaterialModule } from '@pwc/shared/material';

// interface Settings{
//   label:string;
// }

// @Component({
//   selector: 'pwc-tag-selector',
//   templateUrl: './tag-selector.component.html',
//   styleUrls: ['./tag-selector.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class TagSelectorComponent {
//   constructor() {}
//   add(event: MatChipInputEvent) {
//     const value = (event.value || '').trim();
//     console.log(`add.Value${value}`);
//     console.log(
//       `add.this.control.Value${this.interestsControl.value}`
//     );
//     const interestToAdd = this.allInterests.find((i) => i.id === Number(value));
//     console.log(`add.interestToAdd${JSON.stringify(interestToAdd)}`);
//     if (interestToAdd) {
//       this.interests.push(interestToAdd);
//       this.interestsControl.setValue({ ...this.interestsControl.value, value });
//     }
//   }
//   remove(interest: IInterestViewModel): void {
//     console.log(`remove.interest${JSON.stringify(interest)}`);
//     this.interests = this.interests.filter((i) => i.id != interest.id);
//   }
//   selected(event: MatAutocompleteSelectedEvent): void {
//     const interestToAdd = event.option.value;
//     console.log(`add.interestToAdd${JSON.stringify(interestToAdd)}`);
//     this.interests.push(interestToAdd);
//     this.interestInput.nativeElement.value = '';
//     this.interestsControl.setValue(null);
//   }
//   private _filter(value: Interest): IInterestViewModel[] {
//     const filterValue = value.name.toLowerCase();
//     return this.allInterests.filter((i) =>
//       i.name.toLowerCase().includes(filterValue)
//     );
//   }
//   //TODO: leverage observables/subjects for interests
//   //https://stackblitz.com/edit/how-to-save-selected-object-using-mat-chip-and-autocomplete-in
//   //https://www.npmjs.com/package/ngx-chips
// }

// @NgModule({
//   imports: [SharedMaterialModule],
//   exports: [],
//   declarations: [TagSelectorComponent],
//   providers: [],
// })
// export class TagSelectorModule {}
