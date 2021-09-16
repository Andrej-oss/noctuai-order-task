import {AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {UserOrder} from "../../model/UserOrder";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-user-table-order',
  templateUrl: './user-table-order.component.html',
  styleUrls: ['./user-table-order.component.scss']
})
export class UserTableOrderComponent implements AfterViewInit, OnChanges {
  @Input() userOrder: UserOrder | undefined;
  displayedColumns: string[] = ['No', 'name', 'age', 'size', 'color', 'date', 'count'];
  usersOrders: UserOrder[] = [];
  dataSource = new MatTableDataSource(this.usersOrders);
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const findIndex = this.usersOrders.findIndex(user => user.color === changes.userOrder.currentValue.color
        && user.size === changes.userOrder.currentValue.size);
      if (!changes.userOrder.previousValue
        || (changes.userOrder.currentValue.date !== changes.userOrder.previousValue.date)
    && findIndex === -1){
      this.usersOrders.push(changes.userOrder.currentValue);
      this.dataSource = new MatTableDataSource<UserOrder>(this.usersOrders);
    } else if(findIndex !== -1){
        this.usersOrders.splice(findIndex, 1, {
            ...this.usersOrders[findIndex],
            count: this.usersOrders[findIndex].count + 1
        });
        this.dataSource = new MatTableDataSource<UserOrder>(this.usersOrders);
    }
  }
}
