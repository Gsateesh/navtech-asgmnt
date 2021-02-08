import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DividerModule } from 'primeng/divider';
import { CookieService } from "ngx-cookie-service";
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FooterComponent } from './footer/footer.component';
import { CheckboxModule } from 'primeng/checkbox';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {CalendarModule} from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PasswordModule } from 'primeng/password';
import { EditOrderComponent } from './edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FourOFourComponent,
    FooterComponent,
    OrdersListComponent,
    AddOrderComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    CardModule,
    InputTextModule,
    SplitButtonModule,
    DividerModule,
    ToolbarModule,
    MenuModule,
    DynamicDialogModule,
    TableModule,
    ConfirmPopupModule,
    InputTextareaModule,
    InputNumberModule,
    CheckboxModule,
    CalendarModule,
    KeyFilterModule,
    PasswordModule
  ],
  providers: [
    CookieService,
    ConfirmationService,
    MessageService,
    AddOrderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
