import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CommonService } from './../../service';
@Component({
  selector: 'app-monthly-maintanence',
  templateUrl: './monthly-maintanence.component.html',
  styleUrls: ['./monthly-maintanence.component.scss']
})
export class MonthlyMaintanenceComponent implements OnInit {
  rowData: any[]= [
    
  ];
  colDef: ColDef[]= [
    {field: "name"},
    {field: "flatNo"},
    {field: "amount"},
    {field: "paidDate"},
    {field: "transactionMode"},
    {field: "transactionId"},
    {field: "comment"},
  ];
  constructor(private neewService: CommonService) { }

  ngOnInit(): void {
    let startDate = "2023-12-18T04:38:39.320Z";
    let toDate = "2023-12-18T04:38:39.320Z";
    this.neewService.getMonthlyMaintanence().subscribe(data=> {
      if(data) {
        console.log("monthly exp",data)
        this.rowData = data;
      }
    })
  }
}
