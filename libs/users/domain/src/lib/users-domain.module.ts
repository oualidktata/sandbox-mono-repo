import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './infrastructure/users.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [UserService],
})
export class UsersDomainModule {}
