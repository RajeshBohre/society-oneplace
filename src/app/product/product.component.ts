import { Component, OnInit } from '@angular/core';
import { CommonService } from './../service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  cols:any = [];
  cars:any;
  activeItem: any;
  items: any = [];
  

  constructor(private newService :CommonService) { }

  ngOnInit(): void {
    this.items = [{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home'},
  { label: 'Monthly Maintanence', icon: 'pi pi-fw pi-calendar', routerLink: 'monthlyMaintanence' },
  { label: 'Monthly Expenses', icon: 'pi pi-fw pi-pencil', routerLink: 'monthlyExpenses' },
  { label: 'Total Maintanence', icon: 'pi pi-fw pi-file', routerLink: 'totalMaintanence'},
  { label: 'Total Expenses', icon: 'pi pi-fw pi-cog',routerLink: 'totalExpenses' }];
    this.cols = [
      { 'field': 'vin', 'header': 'Vin' },
      { 'field': 'year', 'header': 'Year' },
      { 'field': 'brand', 'header': 'Brand' },
      { 'field': 'color', 'header': 'Color' }
  ];
  
    this.newService.GetUser().subscribe((data :any) => {
    //this.Repdata = data
    console.log("get data => ",data);
    // this.dataSource = new MatTableDataSource(data);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    });
    
    
  }
  onActiveItemChange(event: any) {

  }
  activateLast() {

  }
}
