import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'mono-repo-pwc-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  enteredRoute: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.pipe(
    //   switchMap((params:ParamMap) => {
    //     of(params.get('id'));
    //   }).subscribe(d=>{
    //     this.enteredRoute=d
    //   })
    // );
  }
}
