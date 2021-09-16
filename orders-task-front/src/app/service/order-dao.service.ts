import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUrl} from "../config";
import {UserOrders} from "../model/UserOrders";
import {Observable} from "rxjs";
import {UserOrder} from "../model/UserOrder";

@Injectable({
  providedIn: 'root'
})
export class OrderDaoService {
  orderUrl: string = ApiUrl.ApiOrder;

  constructor(private httpClient: HttpClient) { }

  saveAllOrders(userOrders: UserOrder[]): Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.orderUrl}/all`, userOrders);
  }
  getAllOrders(): Observable<UserOrder[]>{
    return this.httpClient.get<UserOrder[]>(this.orderUrl);
  }
}
