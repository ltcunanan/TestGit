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

  constructor(public service: RequestService,
    private router: Router) { 
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
