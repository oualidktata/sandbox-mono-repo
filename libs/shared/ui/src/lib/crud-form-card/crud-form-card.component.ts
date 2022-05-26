import { formatCurrency } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { CrudFormCardSettings } from './models/crud-form-card.model';
import { EditForm } from './models/edit-form.interface';
import { EDITFORM_TOKEN } from './models/edit-form.token';
@Component({
  selector: 'pwc-crud-form-card',
  templateUrl: './crud-form-card.component.html',
  styleUrls: ['./crud-form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudFormCardComponent implements OnInit {
  @Input() settings: CrudFormCardSettings = {};
  @ContentChild(EDITFORM_TOKEN as never, { static: false })
  editForm!: EditForm;
  @Input() readyToSave = false;
  @Output() notifyDeletion: EventEmitter<EditForm> = new EventEmitter();
  vm: CrudFormCardSettings = { title: 'crud form title' };
  isReadMode = true;
  isLoading = false;
  invalid = false;
  //canSave = false;
  ngOnInit(): void {
    this.isLoading = true;
    //this.editForm.load();
    this.vm.title = this.settings.title ?? 'defaultTitle';
    this.isLoading = false;
  }
  displayContent() {
    this.isReadMode ? this.edit() : this.cancel();
  }
  cancel() {
    console.log('exited edit mode!');
    this.isReadMode = !this.isReadMode;
  }
  edit() {
    //this.editForm.edit();
    console.log('entered edit mode!');
    this.isReadMode = !this.isReadMode;
  }
  save() {
    //raise save event

    console.log('save called!');
  }
  canSave = () => {
    console.log(`canSave=${!this.isReadMode}`);
    return !this.isReadMode;
  };
  toggleEditMode = (value: boolean) => {
    this.isReadMode = value;
  };
  delete = () => {
    this.editForm.delete();
  };
}
