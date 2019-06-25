import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RequestsComponent} from './requests/requests.component'
import {ReserveFormComponent} from './reserve-form/reserve-form.component'
import { DetailsComponent } from './details/details.component';
import {EditRequestComponent} from './edit-request/edit-request.component'

const routes: Routes = [
  { path: '', component: RequestsComponent },
  { path: 'reserveform', component: ReserveFormComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'editrequest/:requestId', component: EditRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
