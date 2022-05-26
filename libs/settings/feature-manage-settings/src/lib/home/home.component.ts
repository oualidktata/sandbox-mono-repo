import { CommonModule } from '@angular/common';
import { Component ,NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationSettingModule } from '../organization-setting/organization-setting.component';

@Component({
  selector: 'pwc-settings-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule,OrganizationSettingModule],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }

