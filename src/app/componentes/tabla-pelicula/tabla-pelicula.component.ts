import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';
import {Pelicula} from '../../clases/pelicula';
import {Router} from '@angular/router';
import {PeliculasService} from '../../servicios/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
  @Input() verDetalle = true;
  public pelicula: Pelicula;
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  // @Input() actorSeleccionado: Actor;
  @Input() filtra: false;

  constructor(private ps: PeliculasService) { }

  ngOnInit(): void {
  }

  public refrescarLista( idPelicula: string ): void {
    this.listadoPeliculas = this.listadoPeliculas.filter(item => item.id !== idPelicula);
  }

  public seleccionado(pelicula: Pelicula): void {
    this.actorSeleccionado.emit(pelicula);
  }

  public seleccionPelicula(pelicula: Pelicula): void{
    this.pelicula = pelicula;
  }

  borrarPelicula(p: Pelicula): void {
    this.ps.borrarPeliculaPorId(p.id).then(x => {
      console.log('pelicula borrada');
      this.pelicula = null;
      location.reload();
    })
    .catch( error => {
      console.log('error al borrar actor', error);
    });
  }

  modificarPelicula(e): void {
    this.ps.modificarPelicula(e).then(x => {
      console.log('pelicula modificada');
      this.pelicula = null;
    })
    .catch(error => {
      console.log('error al modificar la pelicula', error);
    });
  }


}
