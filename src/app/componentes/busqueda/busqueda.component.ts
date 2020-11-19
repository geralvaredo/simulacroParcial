import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PeliculasService} from '../../servicios/peliculas.service';
import {Pelicula} from '../../clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public listadoPeliculas: Array<Pelicula>;
  public volverBtn = false;
  public noEncontro = false;

  constructor(private peliculasServ: PeliculasService) { }

  ngOnInit(): void {
  }

  buscarPeliculas(peliculasBusqueda: Array<Pelicula>): void {
    if (peliculasBusqueda.length > 0) {
      this.listadoPeliculas = peliculasBusqueda;
      this.noEncontro = false;
      this.volverBtn = true;
    } else {
      this.listadoPeliculas = peliculasBusqueda;
      this.noEncontro = true;
    }
  }

  CargarPeliculas(): void{
    this.peliculasServ.obtenerPeliculas().then(
      data => {this.peliculasServ = data;
               console.log(data);
               this.volverBtn = false;
               this.noEncontro = false;
      });
  }


}
