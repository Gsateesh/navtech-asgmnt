import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    loginId: new FormControl('user@navtech.com', [Validators.required, Validators.email]),
    password: new FormControl('user@123', Validators.required),
    remember: new FormControl(true),
  });

  constructor(
    private router: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  onSubmit(){
    if(this.loginForm.value.loginId == "user@navtech.com" && this.loginForm.value.password == "user@123" ){
      this.cookieService.deleteAll();
      this.cookieService.set( 'login', 'success' );
      this.cookieService.set( 'name', this.loginForm.value.loginId );
      this.router.navigate(['orderslist']);
    }else{
      this.loginFailedAlert();
    }
  }
  loginFailedAlert() {
    this.messageService.add({key: 'bc', severity:'error', summary: 'Failed', detail: 'Please check your login credentials!'});
  }

}
