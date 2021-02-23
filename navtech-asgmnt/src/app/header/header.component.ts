import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  userItems: MenuItem[];
  User: string;
  constructor(private cookieService: CookieService, private router: Router) { 
    this.userItems = [
      
      {
          label: 'Options',
          items: [{
              label: 'Logout',
              icon: 'pi pi-sign-out',
              command: () => {
                this.logout();
              }
          }
      ]}
  ];
  }

  ngOnInit(): void {
    this.User = this.cookieService.get( 'name' );
  }



  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['login']);
  }

}
