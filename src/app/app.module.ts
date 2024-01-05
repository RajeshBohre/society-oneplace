import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommonService } from './service';
import { AppRoutingModule } from './app-routing.module';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './product/home/home.component';
import { MonthlyMaintanenceComponent } from './product/monthly-maintanence/monthly-maintanence.component';
import { MonthlyExpensesComponent } from './product/monthly-expenses/monthly-expenses.component';
import { TotalExpensesComponent } from './product/total-expenses/total-expenses.component';
import { TotalMaintanenceComponent } from './product/total-maintanence/total-maintanence.component';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { AgGridModule } from "ag-grid-angular";
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    MonthlyMaintanenceComponent,
    MonthlyExpensesComponent,
    TotalExpensesComponent,
    TotalMaintanenceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    InputTextModule,
    CalendarModule,
    TableModule,
    FormsModule,
    MultiSelectModule,
    AgGridModule,
    RadioButtonModule,
    DropdownModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
