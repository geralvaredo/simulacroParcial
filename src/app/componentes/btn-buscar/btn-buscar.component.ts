import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pelicula} from '../../clases/pelicula';
import {PeliculasService} from '../../servicios/peliculas.service';

@Component({
  selector: 'app-btn-buscar',
  templateUrl: './btn-buscar.component.html',
  styleUrls: ['./btn-buscar.component.scss']
})
export class BtnBuscarComponent implements OnInit {

  @Output() resultadoBuscar: EventEmitter<Pelicula[]> = new EventEmitter<Pelicula[]>();
  public modelo: string;
  private listadoPeliculas: Array<Pelicula>;

  constructor(private peliculas: PeliculasService) { }

  ngOnInit(): void {
  }

  public buscar(): void {
    this.peliculas.obtenerPeliculas().then(
      data => {this.listadoPeliculas = data.filter(pelicula => pelicula.nombre.toUpperCase() === this.modelo.toUpperCase());
               console.log(data);
               if (this.listadoPeliculas.length < 1) {
          // alert('No se encontraron resultados');
          this.listadoPeliculas = [];
          console.log(this.listadoPeliculas);
          this.resultadoBuscar.emit(this.listadoPeliculas);
        } else {
          this.resultadoBuscar.emit(this.listadoPeliculas);
        }
      });
  }

}
