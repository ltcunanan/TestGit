import { Component, OnInit } from '@angular/core';
import { RequestService } from '../shared/request.service';
import { Request } from '../shared/request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  

  list: Request[];
  p: number = 1;

  constructor(public service: RequestService,
    private router: Router) 
  { /*
      var colorMatch = {
        "sent" : 'grey',
        "pending" : 'yellow',
        "cancelled" : 'red',
        "completed" : 'green'
      };*/
  }

  ngOnInit() {
    this.service.getRequests().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() 
        } as Request;
      })
    })

  }
  goTo(id:any){
    this.router.navigate(['/details',id]);
  }
}
