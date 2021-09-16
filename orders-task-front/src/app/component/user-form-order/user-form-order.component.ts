import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { colors } from 'src/app/constants/colors';
import {UserOrder} from "../../model/UserOrder";
import {UserTableOrderComponent} from "../user-table-order/user-table-order.component";

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

  constructor() {
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
    this.order = {
      name: userOrder.get('userName')!.value,
      age: +userOrder.get('userAge')!.value,
      size: userOrder.get('size')!.value,
      color: userOrder.get('color')!.value,
      date: new Date(),
      count: 1
    }
    this.userOrder.reset();
  }

  onShowTable(): void{
    this.isTable = !this.isTable;
  }
}
