import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastTileComponent } from './forcast-tile.component';

describe('TotalsTileComponent', () => {
  let component: ForcastTileComponent;
  let fixture: ComponentFixture<ForcastTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
