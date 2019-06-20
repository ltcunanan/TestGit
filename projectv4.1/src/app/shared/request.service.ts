import { Injectable } from '@angular/core';
import { Request } from './request.model';
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
}
