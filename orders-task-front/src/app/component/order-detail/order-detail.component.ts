import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PairOrder} from "../../model/PairOrder";
import {UserOrder} from "../../model/UserOrder";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<OrderDetailComponent>,
               @Inject(MAT_DIALOG_DATA) public data: UserOrder) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onChooseStyleBox(color: string, size: string): string{
    if (size === 'S') {
      return `width: 25px; height: 25px; border: 1px solid black; background-color: ${color}`;
    } else if (size === 'M') {
      return `width: 50px; height: 50px; border: 1px solid black; background-color: ${color}`;
    } else if (size === 'L') {
      return `width: 75px; height: 75px; border: 1px solid black; background-color: ${color}`;        } else if (size === 'xl') {
    } else if(size === 'XL') {
      return `width: 100px; height: 100px; border: 1px solid black; background-color: ${color}`;        } else if (size === 'xl') {
    }
    return '';
  }
}
