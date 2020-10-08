import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  @Input() listadoActores: Array<Actor> = Array<Actor>();
  @Output() borrado: EventEmitter<any> = new EventEmitter<any>();
  @Output() modificado: EventEmitter<any> = new EventEmitter<any>();

  usuario;

  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }


  public emitirBorrado( actor: Actor): void {
    this.borrado.emit(actor);
  }

  public EmitirModificado( actor: Actor): void {
    this.modificado.emit(actor);
  }

}
