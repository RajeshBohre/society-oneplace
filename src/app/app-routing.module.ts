import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './product/home/home.component';
import { MonthlyExpensesComponent } from './product/monthly-expenses/monthly-expenses.component';
import { MonthlyMaintanenceComponent } from './product/monthly-maintanence/monthly-maintanence.component';
import { TotalMaintanenceComponent } from './product/total-maintanence/total-maintanence.component';
import { TotalExpensesComponent } from './product/total-expenses/total-expenses.component';

const routes: Routes = [
  {path: 'login', component: ProductComponent},
  {path : 'home', component: HomeComponent},
  {path: 'monthlyExpenses', component: MonthlyExpensesComponent},
  {path: 'monthlyMaintanence', component: MonthlyMaintanenceComponent},
  {path: 'totalExpenses', component: TotalExpensesComponent},
  {path: 'totalMaintanence', component: TotalMaintanenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
