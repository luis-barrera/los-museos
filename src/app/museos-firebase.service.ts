// Crear un servicio Injectable en otros servicios o componentes
import { Injectable } from '@angular/core';
// Módulo de Angular para facilitar la conexión a Firebase
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class MuseosFirebaseService {

  constructor(
    private firestore: AngularFireDatabase
  ) { }

  // Obtener el JSON en el campo "data" del JSON en Firebase
  getMuseos(){
    // Regresar un Observable para obtener los datos
    return this.firestore.list("data").valueChanges();
  }
}
