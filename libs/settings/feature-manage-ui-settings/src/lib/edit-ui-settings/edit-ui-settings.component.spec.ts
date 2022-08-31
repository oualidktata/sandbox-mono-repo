import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUiSettingsComponent } from './edit-ui-settings.component';

describe('EditUiSettingsComponent', () => {
  let component: EditUiSettingsComponent;
  let fixture: ComponentFixture<EditUiSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUiSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUiSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
