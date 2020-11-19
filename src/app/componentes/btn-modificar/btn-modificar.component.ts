import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';
import {Pelicula} from '../../clases/pelicula';

@Component({
  selector: 'app-btn-modificar',
  templateUrl: './btn-modificar.component.html',
  styleUrls: ['./btn-modificar.component.scss']
})
export class BtnModificarComponent implements OnInit {

  @Input() actorSeleccionado: Actor;
  @Input() peliculaSeleccionada: Pelicula;
  @Output() actor: EventEmitter<any> = new EventEmitter<any>();
  @Output() pelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirActor(): void {
    this.actor.emit(this.actorSeleccionado);
  }

  emitirPelicula(): void {
    this.pelicula.emit(this.peliculaSeleccionada);
  }

}
