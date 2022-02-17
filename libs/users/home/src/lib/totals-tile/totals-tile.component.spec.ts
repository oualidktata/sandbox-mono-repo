import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsTileComponent } from './totals-tile.component';

describe('TotalsTileComponent', () => {
  let component: TotalsTileComponent;
  let fixture: ComponentFixture<TotalsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
