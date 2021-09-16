import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { colors } from 'src/app/constants/colors';

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
    console.log(userOrder);
    this.userOrder.reset();
  }
}
