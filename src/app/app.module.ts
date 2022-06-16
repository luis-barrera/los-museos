import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaMuseosComponent } from './lista-museos/lista-museos.component';

// Servicios
import { MuseosFirebaseService } from './museos-firebase.service';
import { MuseosService } from './museos.service';

// Módulos para Firebase
import { AngularFireModule } from '@angular/fire/compat';
// Módulo de Realtime
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// Variables de entorno
import { environment } from "src/environments/environment";

// Módulos de Material
// Tablas
import { MatTableModule } from '@angular/material/table';
// Formularios
import { MatFormFieldModule } from '@angular/material/form-field';
// Inputs
import { MatInputModule } from '@angular/material/input';
// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaMuseosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    // Módulos de Material
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    // Servicios
    MuseosFirebaseService,
    MuseosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
