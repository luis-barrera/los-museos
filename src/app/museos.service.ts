// Servicio que sirve de middleware entre los componentes y las BBDD
import { Injectable } from '@angular/core';
// Servicio que conectar con la Realtime Database de Firebase
import { MuseosFirebaseService } from './museos-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class MuseosService {

  // JSON que contiene la información de los museos
  JSONMuseos: any = [];

  constructor(
    private museosService: MuseosFirebaseService
  ) { }

  // Pedir al servicio de Firebase que obtenga los datos
  getMuseos() {
    // Regresa un observable
    return this.museosService.getMuseos();
  }
}
