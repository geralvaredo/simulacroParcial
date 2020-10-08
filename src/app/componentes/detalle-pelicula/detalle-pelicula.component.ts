import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';
import {Pelicula} from '../../clases/pelicula';
import {PeliculasService} from '../../servicios/peliculas.service';
import {ActoresService} from '../../servicios/actores.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() objetoABorrar;
  @Input() queBorro: string;
  @Output() borrado: EventEmitter<any> = new EventEmitter<any>();

  constructor( private pelicula: PeliculasService, private actores: ActoresService ) {}

  private borrar(): void {

    if ( this.queBorro === 'pelicula' ) {
      this.pelicula.borrarPeliculaPorId((this.objetoABorrar as Pelicula).id)
      .then( () => {
        this.borrado.emit((this.objetoABorrar as Pelicula).id);
      })
      .catch( error => {
        console.log(error);
      });
    } else if ( this.queBorro === 'actor' ) {
      this.actores.modificarActor(JSON.parse( JSON.stringify(this.objetoABorrar)))
      .then( () => {
        this.borrado.emit(this.objetoABorrar);
      })
      .catch( error => {
        console.log(error);
      });
    }
  }

  ngOnInit(): void {
  }

}
