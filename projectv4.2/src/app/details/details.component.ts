import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestService } from '../shared/request.service';
import { Request } from '../shared/request.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  listing: Request;
  requestId: number;
  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public service: RequestService,
    private router: Router
  ) { }

  ngOnInit() {
      this.sub = this.activatedRoute.params.subscribe((params: Params) =>{
      this.requestId = params['id'];
      })
      
      this.service.getListingDetails(this.requestId).subscribe(listing =>{
        this.listing = listing;
      })
    //this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
