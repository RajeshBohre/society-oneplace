import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../service';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  new_date: any = new Date();
  name: any;
  flatNo: string = '';
  amount: Number = 0
  comment: string = '';
  memberList: any = []
  ingredient: string = 'Mushroom';
  voucherNo: String= '';
  expensesAmount: any;
  paidBy: string = '';
  paidTo: Number = 0
  paidDate: any = new Date();
  expComment: any = [];
  transactionid: any;
  mode: any;
  _selectedFile: any;

  constructor(private newService :CommonService) { }

  ngOnInit(): void {
    
    this.newService.getMemeberList().subscribe((data :any) => {
      console.log("get data => ",data);
      this.memberList = data[0].members;
    });
  }
  onBasicUpload(event: any) {
    const files = event.target.files;
    this._selectedFile = files;
  }
  memberSelect(event:any) {
    console.log("list", event);
    this.flatNo = event.value.Flat;
  }
  saveMaintanence() {
    
      this.name = this.name;
      const formData = {
        name: this.name.value,
        flatNo : this.flatNo,
        amount: this.amount,
        paidDate: this.new_date,
        transactionId: this.transactionid,
        transactionMode: this.mode,
        comment: this.comment
      }
      this.newService.saveUser(formData).subscribe((data :any) => {
        //this.Repdata = data
        console.log("get data => ",data);
      });
    
    
  }
  submitForm(val: String){
    
    if(this._selectedFile && this._selectedFile.length) {
      const temp = {
        multipartFile: this._selectedFile.item(0)
      }
      this.newService.uploadEvidence(temp.multipartFile).subscribe(resp => {
        if(resp){
          this.saveMaintanence();
        }
      })
    } else {
      this.saveMaintanence();
    }
    
    if(val != "maintanence") {
      const expData = {
        voucherNo: this.voucherNo,
        paidBy : this.paidBy,
        paidTo : this.paidTo,
        amount: this.expensesAmount,
        paidDate: this.paidDate,
        comment: this.comment
      }
      this.newService.saveExpenses(expData).subscribe((data :any) => {
        //this.Repdata = data
        console.log("get data => ",data);
        // this.dataSource = new MatTableDataSource(data);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        });
    }
    
      
      
  }
}
