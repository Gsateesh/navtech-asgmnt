import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {


  constructor(public router: Router, private cookieService: CookieService) { }

  canActivate(): boolean {
    if ( this.cookieService.get('login') == "success") {
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    } 
  }
  
}
