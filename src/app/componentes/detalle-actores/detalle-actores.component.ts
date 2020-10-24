import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../clases/actor';
import {Pelicula} from '../../clases/pelicula';

@Component({
  selector: 'app-detalle-actores',
  templateUrl: './detalle-actores.component.html',
  styleUrls: ['./detalle-actores.component.scss']
})
export class DetalleActoresComponent implements OnInit {

  @Input() actorSeleccionado: Actor;
  @Input() pelicula: Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

}
