import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEndUserSupportComponent } from './view-end-user-support.component';

describe('ViewEndUserSupportComponent', () => {
  let component: ViewEndUserSupportComponent;
  let fixture: ComponentFixture<ViewEndUserSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEndUserSupportComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEndUserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
