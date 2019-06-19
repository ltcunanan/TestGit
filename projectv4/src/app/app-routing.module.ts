import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component'
import {ReserveFormComponent} from './reserve-form/reserve-form.component'

const routes: Routes = [
  { path: '', component: RequestsComponent },
  { path: 'reserveform', component: ReserveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
