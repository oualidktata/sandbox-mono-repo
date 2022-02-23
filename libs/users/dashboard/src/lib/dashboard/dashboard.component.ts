import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CardModel } from '@pwc/shared/ui';

@Component({
  selector: 'pwc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  totalTileSettings = {
    title: 'Total Folks from dashboard',
    cols: 1,
    rows: 1,
  } as CardModel;
  forcastTileSettings = {
    title: 'Short Term from dashboard',
    cols: 2,
    rows: 1,
  } as CardModel;
  secondForcastTileSettings = {
    title: 'Long Term',
    cols: 1,
    rows: 2,
  } as CardModel;
  secondTotalTileSettings = {
    title: 'Total Second ',
    cols: 1,
    rows: 3,
  } as CardModel;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
