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
}
