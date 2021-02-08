import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  domain: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  checkLogin(): Observable<any> {
    return this.http.get( "login", { headers : {
      'Content-Type': 'application/json; charset=UTF-8'
  }
  } );
  }
}
