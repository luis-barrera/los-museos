import { Component, OnInit } from '@angular/core';
import { MuseosService } from '../museos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-museos',
  templateUrl: './lista-museos.component.html',
  styleUrls: ['./lista-museos.component.sass']
})
export class ListaMuseosComponent implements OnInit {

  // Lista de las columnas a mostrar en la tabla Material
  displayedColumns: string[] = ['name', 'category', 'location']
  // JSON de los Museos
  JSONMuseos: any;

  constructor(
    private museosService: MuseosService
  ) { }

  ngOnInit(): void { 
    // Al iniciar/crear el componente obtener los datos
    this.getJSONMuseos();
  }

  // Pedir los datos al Servicio
  getJSONMuseos(){
    // Usar el Observable para obtener datos
    this.museosService.getMuseos().subscribe((res: any) => {
      // Asignar la respuesta a una variable del tipo necesario para usarlo en
      // las tablas de Material
      this.JSONMuseos = new MatTableDataSource(res);
    });
  }

  // Función que filtra las entradas del JSON
  applyFilter(event: Event) {
    // Obtener el string en el campo
    const filterValue = (event.target as HTMLInputElement).value;
    // Filtrar el JSON con el string
    this.JSONMuseos.filter = filterValue.trim().toLowerCase();
  }
}
