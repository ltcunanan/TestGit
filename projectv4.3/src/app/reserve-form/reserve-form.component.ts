import { Component, OnInit} from '@angular/core';
import { RequestService } from '../shared/request.service';
import { Request } from '../shared/request.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Venue } from '../shared/venue.model';
import { Org } from '../shared/org.model';


@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})

export class ReserveFormComponent implements OnInit{

  list_venue : Venue[];
  list_org : Org[];

  constructor(public service :RequestService,
    public firestore:AngularFirestore,
    private router: Router,
    public toastr : ToastrService){}

  ngOnInit(){
    this.resetForm();

    this.service.getVenues().subscribe(actionArray =>{
      this.list_venue = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Venue;
      })
    })

    this.service.getOrgs().subscribe(actionArray =>{
      this.list_org = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Org;
      })
    })
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData={
      id : '',
      name: '',
      org: '',
      venue: '',
      reason: '',
      status: ''
    }
  }

  onSubmit(form:NgForm) { 
    let data = form.value;
    delete data.id;
    data.status = 'sent';
    this.firestore.collection('requests').add(data);
    //this.resetForm(form);
    this.toastr.success('Submitted successfully','EMP. Request');
    this.submitted = true; 
    this.router.navigateByUrl('');
  }

  //venues = ['AS Hall', 'Joggers Path', 'Performing Arts Hall', 'AVR'];
  orgs = ['Nichi', 'Upstage', 'YFC', 'Computer Science Guild'];

  submitted = false;
}
