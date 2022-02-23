import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSettingsComponent } from './shell-settings.component';

describe('ShellSettingsComponent', () => {
  let component: ShellSettingsComponent;
  let fixture: ComponentFixture<ShellSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
