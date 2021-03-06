import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  {routes} from './app-routing.module';
import { AppComponent } from './component/app-page/app.component';
import {MaterialModule} from "./module/material-module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MAT_RADIO_DEFAULT_OPTIONS} from "@angular/material/radio";
import { UserFormOrderComponent } from './component/user-form-order/user-form-order.component';
import { UserTableOrderComponent } from './component/user-table-order/user-table-order.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
     AppComponent,
    UserFormOrderComponent,
    UserTableOrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
     MaterialModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
    MatNativeDateModule,
   RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
