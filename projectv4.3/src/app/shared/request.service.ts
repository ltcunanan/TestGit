import { Injectable } from '@angular/core';
import { Request } from '../shared/request.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  formData : Request;
  constructor(public firestore:AngularFirestore) { }

  getRequests(){
    return this.firestore.collection('requests').snapshotChanges()
  }

  getVenues(){
    return this.firestore.collection('venues').snapshotChanges()
  }

  getOrgs(){
    return this.firestore.collection('orgs').snapshotChanges()
  }
  
  getListingDetails(id){
    return this.firestore.doc<Request>('requests/' + id).valueChanges();
  }

}
