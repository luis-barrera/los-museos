import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaMuseosComponent } from './lista-museos/lista-museos.component';

import { MuseosFirebaseService } from './museos-firebase.service';
import { MuseosService } from './museos.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from "src/environments/environment";

const appRoutes: Routes = [
  {path:'', component: HomeComponent},  // Home
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaMuseosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    MuseosFirebaseService,
    MuseosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
