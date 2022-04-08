import { Component, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'pwc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  public value!: string;
  public changed!: (value: any) => void;
  public touched!: () => void;
  public isDisabled!: boolean;
  //Write a new value when set value or patch value is called
  writeValue(value: string): void {
    this.value = value;
  }
  //when the control's value changes in the UI.
  registerOnChange(fn: (value: any) => void): void {
    this.changed = fn;
  }
  //when control loose focus:update the form model on blur
  registerOnTouched(fn: () => void): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
