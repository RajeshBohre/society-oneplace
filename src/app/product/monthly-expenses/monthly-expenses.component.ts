import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CommonService } from './../../service';

@Component({
  selector: 'app-monthly-expenses',
  templateUrl: './monthly-expenses.component.html',
  styleUrls: ['./monthly-expenses.component.scss']
})
export class MonthlyExpensesComponent implements OnInit {
  rowData: any[]= [
    
  ];
  colDef: ColDef[]= [
    {field: "voucherNo"},
    {field: "paidBy"},
    {field: "paidTo"},
    {field: "amount"},
    {field: "paidDate"},
    {field: "comment"}
  ];
  constructor(private neewService: CommonService) { }

  ngOnInit(): void {
    let startDate = "2023-12-18T04:38:39.320Z";
    let toDate = "2023-12-18T04:38:39.320Z";
    this.neewService.getMonthlyExp().subscribe(data=> {
      if(data) {
        console.log("monthly exp",data)
        this.rowData = data;
      }
    })
  }

}
