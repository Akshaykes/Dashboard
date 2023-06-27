import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'Price', 'Payment'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  Price: number;
  Payment: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HP Laptop', Price: 45800, Payment: 'Paid'},
  {position: 2, name: 'Dell Laptop', Price: 45235, Payment: 'Due'},
  {position: 3, name: 'Apple Phone', Price: 150000, Payment: 'Paid'},
  {position: 4, name: 'Sony Headphone', Price: 25350, Payment: 'Paid'},
  {position: 5, name: 'Samsung TV', Price: 45230, Payment: 'Due'},
  {position: 6, name: 'Xiaomi Phone', Price: 18596, Payment: 'Paid'},
  {position: 7, name: 'Nokia Phone', Price: 25456, Payment: 'Due'},
  {position: 8, name: 'Apple Watch', Price: 15299, Payment: 'Pending'},
  {position: 9, name: 'Samsung Watch', Price: 7500, Payment: 'Paid'},
  {position: 10, name: 'Canon Camera', Price: 52450, Payment: 'Paid'},
  {position: 11, name: 'Sony Camera', Price: 102563, Payment: 'Due'},
  {position: 12, name: 'Nikon Camera', Price: 75000, Payment: 'Paid'},
  {position: 13, name: 'Xiaomi TV', Price: 25869, Payment: 'Pending'},
  {position: 14, name: 'Samsung Watch', Price: 12000, Payment: 'Paid'},
  {position: 15, name: 'Apple Tablet', Price: 45200, Payment: 'Paid'},
  {position: 16, name: 'Vivo Phone', Price: 22500, Payment: 'Due'},
  {position: 17, name: 'Samsung Headphone', Price: 5200, Payment: 'Paid'},
  {position: 18, name: 'Apple Watch', Price: 13500, Payment: 'Paid'},
  {position: 19, name: 'Apple Phone', Price: 90258, Payment: 'Paid'},
  {position: 20, name: 'Apple Watch', Price: 15000, Payment: 'Pending'},
];
