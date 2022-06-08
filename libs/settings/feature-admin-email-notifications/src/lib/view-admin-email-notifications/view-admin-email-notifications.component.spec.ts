import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminEmailNotificationsComponent } from './view-admin-email-notifications.component';

describe('ViewAdminEmailNotificationsComponent', () => {
  let component: ViewAdminEmailNotificationsComponent;
  let fixture: ComponentFixture<ViewAdminEmailNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAdminEmailNotificationsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminEmailNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
