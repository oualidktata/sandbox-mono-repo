import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEndUserSupportComponent } from './edit-end-user-support.component';

describe('EditEndUserSupportComponent', () => {
  let component: EditEndUserSupportComponent;
  let fixture: ComponentFixture<EditEndUserSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEndUserSupportComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEndUserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
