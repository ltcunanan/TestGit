import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component'
import {ReserveFormComponent} from './reserve-form/reserve-form.component'
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: RequestsComponent },
  { path: 'reserveform', component: ReserveFormComponent },
  { path: 'details/:emp.key', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
