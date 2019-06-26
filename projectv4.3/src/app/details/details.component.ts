import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestService } from '../shared/request.service';
import { Request } from '../shared/request.model';
import { AngularFirestore } from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';



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
    private router: Router,
    public firestore:AngularFirestore,
    public toastr : ToastrService
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

  onCancel(){

    if(this.listing.status == 'cancelled'){
      var element = <HTMLInputElement> document.getElementById("cancel-but");
      element.disabled = true;
      
    }
    else{
      if(confirm("Are you sure you want to cancel your request?")){
        this.listing.status = 'cancelled';
        let data = Object.assign({}, this.listing);
        this.firestore.doc('requests/' + this.requestId).update(data);
        this.toastr.success('Cancelled successfully','EMP. Request');
        this.router.navigateByUrl('');
      }
    }
  }

  onEdit(){
    if(this.listing.status == 'cancelled'){
      var element = <HTMLInputElement> document.getElementById("edit-but");
      element.disabled = true;
    }
    else{
      this.router.navigate(['/editrequest',this.requestId]);
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
