import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { LoginComponent } from './login/login.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: OrdersListComponent, canActivate: [LoginGuardService] },
  { path: 'orderslist', component: OrdersListComponent, canActivate: [LoginGuardService] },
  { path: '**', component: FourOFourComponent, canActivate: [LoginGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
