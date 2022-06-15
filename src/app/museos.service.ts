import { Injectable } from '@angular/core';
import { MuseosFirebaseService } from './museos-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class MuseosService {

  JSONMuseos: any = [];

  constructor(
    private museosService: MuseosFirebaseService
  ) { }

  getMuseos() {
    return this.museosService.getMuseos();
    // this.museosService.loadMuseos().subscribe(listaMuseos => {
    //   this.JSONMuseos = Object.values(listaMuseos);
    // });
  }
}
