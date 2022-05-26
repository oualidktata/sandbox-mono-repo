import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastTileComponent } from './forecast-tile.component';

describe('TotalsTileComponent', () => {
  let component: ForecastTileComponent;
  let fixture: ComponentFixture<ForecastTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastTileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
