import { Component, OnInit } from '@angular/core';
import { MuseosService } from '../museos.service';

@Component({
  selector: 'app-lista-museos',
  templateUrl: './lista-museos.component.html',
  styleUrls: ['./lista-museos.component.sass']
})
export class ListaMuseosComponent implements OnInit {

  JSONMuseos: any;

  constructor(
    private museosService: MuseosService
  ) { }

  ngOnInit(): void { 
    this.getJSONMuseos();
    // this.JSONMuseos = this.museosService.getMuseos();
    // console.log(this.JSONMuseos);
  }

  getJSONMuseos(){
    this.museosService.getMuseos().subscribe((res: any) => {
      this.JSONMuseos = Object.values(res);
    });
  }
}
