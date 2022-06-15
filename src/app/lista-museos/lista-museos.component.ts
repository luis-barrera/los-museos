import { Component, OnInit } from '@angular/core';
import { MuseosService } from '../museos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-museos',
  templateUrl: './lista-museos.component.html',
  styleUrls: ['./lista-museos.component.sass']
})
export class ListaMuseosComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'location']
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
      this.JSONMuseos = new MatTableDataSource(res);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.JSONMuseos.filter = filterValue.trim().toLowerCase();
    console.log(this.JSONMuseos);
  }
}
