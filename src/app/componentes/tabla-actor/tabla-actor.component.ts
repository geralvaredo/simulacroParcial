import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';
import {Pelicula} from '../../clases/pelicula';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  public listadoActores: Array<Actor> = Array<Actor>();
  public actor: Actor;
  @Input() verDetalle = true;
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  usuario;

  constructor(private ac: ActoresService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
    this.cargaActores();
  }

  cargaActores(): void {
    this.ac.obtenerActores().then(
      data => {this.listadoActores = data.sort((a, b) => a.apellido.localeCompare(b.apellido));
              // console.log(data);
      });
  }

  public seleccionado(actor: Actor): void {
    this.actorSeleccionado.emit(actor);
  }

  public seleccionActor(actor: Actor): void{
    this.actor = actor;
  }

  borrarActor(a: Actor): void {
    this.ac.borrarActorId(a.id).then(x => {
      console.log('borrado');
      this.actor = null;
      location.reload();
    })
    .catch( error => {
      console.log('error al borrar actor', error);
    });
  }

  modificarActor(e): void {
    this.ac.modificarActor(e).then(x => {
      console.log('actor modificado');
      this.actor = null;
      location.reload();
    })
    .catch(error => {
      console.log('error al modificar el actor', error);
    });
  }




}
