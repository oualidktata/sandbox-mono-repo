import {
  Component,
  OnDestroy,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { UiService } from '../add-user/services/ui.service';
import { Subscription } from 'rxjs';
import { User } from '@pwc/users/domain';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '@pwc/shared/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pwc-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnDestroy {
  @Output() updateUser: EventEmitter<Partial<User>> = new EventEmitter();
  firstName = '';
  lastName = '';
  active = false;
  showAddUser = false;
  createdOn = '';
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddUser = value));
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (!this.firstName || !this.lastName) {
      alert('Please add a User!');
      return;
    }

    const newUser: Partial<User> = {
      firstName: this.firstName,
      lastName: this.lastName,
      active: this.active,
      createdOn: this.createdOn,
    };

    this.updateUser.emit(newUser);

    this.firstName = '';
    this.lastName = '';
    this.active = false;
  }
}

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [UpdateUserComponent],
  declarations: [UpdateUserComponent],
  providers: [],
})
export class UpdateUserModule {}
