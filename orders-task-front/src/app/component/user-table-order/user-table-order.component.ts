import {AfterViewInit, Component, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserOrder} from "../../model/UserOrder";
import {OrderDaoService} from "../../service/order-dao.service";
import {MatDialog} from "@angular/material/dialog";
import {OrderDetailComponent} from "../order-detail/order-detail.component";
@Component({
  selector: 'app-user-table-order',
  templateUrl: './user-table-order.component.html',
  styleUrls: ['./user-table-order.component.scss']
})
export class UserTableOrderComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['No', 'name', 'age', 'date'];
  usersOrders: UserOrder[] = [];
  dataSource = new MatTableDataSource(this.usersOrders);
  constructor(private orderService: OrderDaoService,
              public dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.orderService.getAllOrders().subscribe(orders => {
      this.usersOrders = orders;
      this.dataSource = new MatTableDataSource<UserOrder>(this.usersOrders);
    });

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onUpdate(): void{
    this.orderService.getAllOrders().subscribe(orders => {
      this.usersOrders = orders;
      this.dataSource = new MatTableDataSource<UserOrder>(this.usersOrders);
    });
  }

  onDetail(element: UserOrder): void {
    const dialogRef = this.dialog.open(OrderDetailComponent, {
      width: '250px',
      data: element
    });
  }
}
