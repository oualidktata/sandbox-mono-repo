import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormCardComponent } from './crud-form-card.component';

describe('CrudFormCardComponent', () => {
  let component: CrudFormCardComponent;
  let fixture: ComponentFixture<CrudFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudFormCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
