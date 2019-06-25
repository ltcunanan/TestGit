import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestService } from '../shared/request.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Request } from '../shared/request.model';


@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  public listing: Request;
  public requestId : string;
  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public service: RequestService,
    public firestore:AngularFirestore
  ) { }

  ngOnInit() {
    //this.resetForm();
    
    this.sub = this.activatedRoute.params.subscribe((params: Params) =>{
      this.requestId = params['requestId'];
    })

    this.service.getListingDetails(this.requestId).subscribe(listing => {
      this.service.formData = Object.assign({}, listing)
    });
    
    //this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData={
      id : null,
      name: '',
      org: '',
      venue: '',
      reason: '',
    }
  }
  
  onEditSubmit(form:NgForm){
    let data = Object.assign({}, form.value);
    this.firestore.doc('requests/' + this.requestId).update(data);
    //this.resetForm(form);
    this.router.navigateByUrl('');
  }

  venues = ['AS Hall', 'Joggers Path', 'Performing Arts Hall', 'AVR'];
  orgs = ['Nichi', 'Upstage', 'YFC', 'Computer Science Guild'];

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
