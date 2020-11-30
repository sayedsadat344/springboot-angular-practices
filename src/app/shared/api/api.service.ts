import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  public getWithoutToken<T>(route: string, itemType?: any): Observable<T> {
    if (!route) {
      return;
    }

    return this.http.get<T>(this.completeServerUrl(route)).pipe(
      map((data: T) => {
        return data;
      })
    );
  }
  public postWithoutToken<T>(route: string, data:any): Observable<T>{
    if (!route) {
      return;
    }
    return this.http.post<T>(this.completeServerUrl(route), data);
  }

  public post<T>(route: string, data: any): Observable<T> {
    if (!route) {
      return;
    }
    return this.http.post<T>(this.completeServerUrl(route), data);
  }
  public deleteById<T>(route: any): Observable<T> {
    if (!route) {
      return;
    }
    return this.http.delete<T>(this.completeServerUrl(route), {
      headers: this.assignHeaders(),
    });
  }
  public putWithoutToken<T>(route: string, data: any): Observable<T> {
    if (!route) {
      return;
    }
    return this.http.put<T>(this.completeServerUrl(route), data, {
      headers: this.assignHeaders(),
    });
  }

  

  
  assignHeaders(): any {
    // let credentials = this._credential.credentials;
    return new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      // .set("Authorization", "Bearer " + credentials.access_token);
  }
  completeServerUrl(route: string) {
    return `${environment.serverUrl}${route}`;
  }
}
