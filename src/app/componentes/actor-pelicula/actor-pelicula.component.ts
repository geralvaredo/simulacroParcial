import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';
import {Pelicula} from '../../clases/pelicula';
import {PeliculasService} from '../../servicios/peliculas.service';
import {ActoresService} from '../../servicios/actores.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

   public actor: Actor;
   public pelicula: Pelicula;
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  public listadoActores: Array<Actor> = Array<Actor>();
  public peliculas: Array<Pelicula>  = [] ;
  public detallePeliActor = true;
  constructor(private ps: PeliculasService, private as: ActoresService) { }

  ngOnInit(): void {
    this.cargaActores();
    this.peliculaServicio();
    console.log(this.actor);
  }

  private peliculaServicio(): any{
    this.ps.obtenerPeliculas().then(
      data => {this.peliculas = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      });
  }

  public seleccionado(actor: Actor): void {
    this.actorSeleccionado.emit(actor);
  }

  public seleccionActor(actor: Actor): void{
    this.actor = actor;
    this.pelicula = this.peliculas.find(peli => peli.actor.id === this.actor.id);
  }

  cargaActores(): void {
    this.as.obtenerActores().then(
      data => {this.listadoActores = data.sort((a, b) => a.apellido.localeCompare(b.apellido));
        // console.log(data);
      });
  }


}
