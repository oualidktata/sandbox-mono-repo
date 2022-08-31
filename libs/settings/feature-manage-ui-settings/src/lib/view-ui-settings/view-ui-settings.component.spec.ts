import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUiSettingsComponent } from './view-ui-settings.component';

describe('ViewUiSettingsComponent', () => {
  let component: ViewUiSettingsComponent;
  let fixture: ComponentFixture<ViewUiSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUiSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUiSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
