import { Component} from '@angular/core';
import { Request } from '../request';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})
export class ReserveFormComponent {

  venues = ['AS Hall', 'Joggers Path', 'Performing Arts Hall', 'AVR'];
  orgs = ['Nichi', 'Upstage', 'YFC', 'Computer Science Guild'];

  model = new Request(1, 'Lily', this.orgs[0], this.venues[0], 'For sem-ender');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}
