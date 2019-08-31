import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent, data: { title: 'App Component' } },
  { path: 'hello', component: DashboardComponent },
  { path: 'hello/:id', component: DashboardComponent },
  { path: 'first', component: AppComponent },
  { path: 'second', component: SecondComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
