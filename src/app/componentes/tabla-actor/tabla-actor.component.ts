import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  public listadoActores: Array<Actor> = Array<Actor>();
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Output() modificado: EventEmitter<any> = new EventEmitter<any>();

  usuario;

  constructor(private ac: ActoresService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.cargaActores();
  }

  cargaActores(): void {
    this.ac.obtenerActores().then(
      data => {this.listadoActores = data.sort((a, b) => a.apellido.localeCompare(b.apellido));
               console.log(data);
      });
  }




  public EmitirModificado( actor: Actor): void {
    this.modificado.emit(actor);
  }

  public seleccionado(actor: Actor): void {
    this.actorSeleccionado.emit(actor);
  }

}
