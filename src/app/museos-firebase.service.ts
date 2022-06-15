import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MuseosFirebaseService {

  constructor(
    private firestore: AngularFireDatabase
  ) { }

  getMuseos(){
    return this.firestore.list("data").valueChanges();
  }
}
