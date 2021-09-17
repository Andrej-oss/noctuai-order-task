import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserFormOrderComponent} from "./component/user-form-order/user-form-order.component";
import {AppComponent} from "./app.component";
import {UserTableOrderComponent} from "./component/user-table-order/user-table-order.component";

export const routes: Routes = [
    {
        path: 'order', component: UserFormOrderComponent
    },
];

