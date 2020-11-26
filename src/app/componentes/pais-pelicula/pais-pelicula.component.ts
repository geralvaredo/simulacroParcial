import { Component, OnInit } from '@angular/core';
import {Paises} from '../../clases/paises';
import {PeliculasService} from '../../servicios/peliculas.service';
import {Pelicula} from '../../clases/pelicula';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';

@Component({
  selector: 'app-pais-pelicula',
  templateUrl: './pais-pelicula.component.html',
  styleUrls: ['./pais-pelicula.component.scss']
})
export class PaisPeliculaComponent implements OnInit {

  nacionalidad: Paises;
  public actor: Actor;
  public pelicula: Pelicula;
  public peliculas: Array<Pelicula>  = [] ;
  public listadoActores: Array<Actor> = Array<Actor>();
  constructor(private ps: PeliculasService, private as: ActoresService) { }

  ngOnInit(): void {
    this.peliculaServicio();
    this.actor = new Actor();
    this.nacionalidad = new Paises();
  }

  private peliculaServicio(): any{
    this.ps.obtenerPeliculas().then(
      data => {this.peliculas = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
      });
  }

  seleccionPais(e: any): void {
    this.nacionalidad = e;
    this.pelicula = this.peliculas.find(peli => peli.nacionalidad === this.nacionalidad);
    this.actor = this.pelicula.actor;
    this.actor.nacionalidad = this.nacionalidad;
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
