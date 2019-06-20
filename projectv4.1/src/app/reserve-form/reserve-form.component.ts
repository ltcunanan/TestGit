import { Component, OnInit} from '@angular/core';
import { RequestService } from '../shared/request.service';
import { Request } from '../shared/request.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css']
})

export class ReserveFormComponent implements OnInit{

  constructor(public service :RequestService,
    public firestore:AngularFirestore,
    public toastr : ToastrService){}

  ngOnInit(){
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData={
      // id : null,
      name: '',
      org: '',
      venue: '',
      reason: '',
    }
  }

  onSubmit(form:NgForm) { 
    let data = form.value;
    this.firestore.collection('requests').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully','EMP. Request');

    this.submitted = true; 
  }

  venues = ['AS Hall', 'Joggers Path', 'Performing Arts Hall', 'AVR'];
  orgs = ['Nichi', 'Upstage', 'YFC', 'Computer Science Guild'];

  submitted = false;
}
