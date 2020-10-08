import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../clases/actor';
import {Pelicula} from '../../clases/pelicula';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() listadoPeliculas: Array<Pelicula> = Array<Pelicula>();
  @Input() actorSeleccionado: Actor;
  @Input() filtra: false;

  constructor() { }

  ngOnInit(): void {
  }

  public refrescarLista( idPelicula: string ): void {
    this.listadoPeliculas = this.listadoPeliculas.filter(item => item.id !== idPelicula);
  }


}
