import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { colors } from 'src/app/constants/colors';
import {UserOrder} from "../../model/UserOrder";
import {UserTableOrderComponent} from "../user-table-order/user-table-order.component";
import {PairOrder} from "../../model/PairOrder";
import {MatTableDataSource} from "@angular/material/table";
import {OrderDaoService} from "../../service/order-dao.service";
import {UserOrders} from "../../model/UserOrders";

@Component({
  selector: 'app-user-form-order',
  templateUrl: './user-form-order.component.html',
  styleUrls: ['./user-form-order.component.scss']
})
export class UserFormOrderComponent implements OnInit {
  userOrder: FormGroup;
  userName: FormControl;
  userAge: FormControl;
  color: FormControl;
  colors: {type: string, value: string}[] = [];
  size: FormControl;
  isTable: boolean = false;
  order: UserOrder | undefined;
  usersTabOrders: string[] = ['No', 'size', 'color', 'count'];
  usersPreOrders: PairOrder[] = [];
  preOrder: PairOrder | undefined;
  dataSource = new MatTableDataSource(this.usersPreOrders);
  usersOrders: UserOrder[] = [];
  errorMessage: string = '';

  constructor(private orderService: OrderDaoService) {
    this.userOrder = new FormGroup({
      userName: this.userName = new FormControl('', [Validators.required]),
      userAge: this.userAge = new FormControl('', [Validators.required]),
      size: this.size = new FormControl('', [Validators.required]),
      color: this.color = new FormControl('', [Validators.required])
    })
    this.colors = colors;
  }

  ngOnInit(): void {
  }

  onSaveInTable(userOrder: FormGroup): void{
    // this.order = {
    //   name: userOrder.get('userName')!.value,
    //   age: +userOrder.get('userAge')!.value,
    //   size: userOrder.get('size')!.value,
    //   color: userOrder.get('color')!.value,
    //   date: new Date(),
    //   count: 1
    // }
    this.preOrder = {
      size: userOrder.get('size')!.value,
      color: userOrder.get('color')!.value,
      count: 1
    }
    const index = this.usersPreOrders.findIndex(preOrder => preOrder.color === this.preOrder?.color && this.preOrder.size === preOrder.size);
    if (index !== -1){
      debugger;
      const pairOrder = this.usersPreOrders[index];
       this.usersPreOrders.splice(index, 1, { ...pairOrder, count: pairOrder.count + 1});
       this.dataSource = new MatTableDataSource<PairOrder>(this.usersPreOrders);
    }else if (index === -1){
      this.usersPreOrders.push(this.preOrder);
    this.dataSource = new MatTableDataSource<PairOrder>(this.usersPreOrders);
     }
    this.userOrder.reset();
    console.log(this.usersPreOrders);
  }

  onShowTable(): void{
    this.isTable = !this.isTable;
  }

  onSaveInDataBase(userOrder: FormGroup): void{
    this.userOrder.disable();
    if (this.usersPreOrders.length){
      this.errorMessage = '';
      const ordersArray = this.usersPreOrders.map(order => {
        return {
          name: userOrder.get('userName')!.value,
          age: userOrder.get('userAge')!.value,
          date: Date.now(),
          ...order
        }
      });
      this.orderService.saveAllOrders(ordersArray)
          .subscribe(data => {
                if (data){
                  this.userOrder.reset();
                  this.usersPreOrders = [];
                  this.dataSource = new MatTableDataSource<PairOrder>(this.usersPreOrders);
                  this.userOrder.enable();
                }
              },
          error => {
            this.userOrder.enable();
            this.errorMessage = 'something was going wrong'
          });
    } else if (!this.usersPreOrders.length){
      this.errorMessage = 'Add some product. Your orders list not should be empty';
      this.userOrder.enable();
    }
  }
}
