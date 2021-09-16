import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./module/material-module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MAT_RADIO_DEFAULT_OPTIONS} from "@angular/material/radio";
import { UserFormOrderComponent } from './component/user-form-order/user-form-order.component';
import { UserTableOrderComponent } from './component/user-table-order/user-table-order.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormOrderComponent,
    UserTableOrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      MaterialModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
    MatNativeDateModule,
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
