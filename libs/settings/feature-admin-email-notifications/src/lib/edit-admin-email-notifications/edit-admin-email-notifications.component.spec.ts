import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminEmailNotificationsComponent } from './edit-admin-email-notifications.component';

describe('EditAdminEmailNotificationsComponent', () => {
  let component: EditAdminEmailNotificationsComponent;
  let fixture: ComponentFixture<EditAdminEmailNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAdminEmailNotificationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdminEmailNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
