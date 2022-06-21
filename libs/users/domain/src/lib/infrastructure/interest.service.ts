import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, Optional } from "@angular/core";
import { ConfigurationService } from "@pwc/user-console-assets/configuration";
import { UsersLibraryConfiguration } from "@pwc/users/configuration";
import { IInterestsConfig } from "libs/users/configuration/src/lib/i-interests-config";
import { Observable, throwError } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { Interest } from "../entities/interest.model";

@Injectable({providedIn:'root'})
export class InterestService{

  private config!:IInterestsConfig;
constructor(@Optional() private configurationService: ConfigurationService ,private http:HttpClient) {
   configurationService.settings$.asObservable().subscribe(settings=>{
    this.config=(settings as UsersLibraryConfiguration).interestsConfig;
   }
  )
}
getAll(): Observable<Interest[]> {
  const headers= new HttpHeaders().append('Accept','application/json');
  //headers.append('authorize','token..')
  //should use this with Real API
  //console.log(`****getUsersByCriteria${JSON.stringify(this.config.usersConfig.baseUri)}`)
  return this.http.get<Interest[]>(this.config.baseUri,{headers:headers }).pipe(
    tap(data=>console.log(this.config.baseUri)),
    map((interests: Interest[]) => {
      return interests;
    }),
    shareReplay(),
    catchError(error=>{
      return throwError(`problem getting interests from back-end-${error}!`)
    })
  );
}


}
