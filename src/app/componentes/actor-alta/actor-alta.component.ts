import { Component, OnInit } from '@angular/core';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';
import {Router} from '@angular/router';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public actor: Actor;
  public nombreError: boolean;
  public apellidoError: boolean;
  public nacionalidadError: boolean;
  public fechaDeNacimientoError: boolean;

  constructor(private actores: ActoresService, private auth: AuthService) { }

  ngOnInit(): void {
    this.ReestablecerTodo();
  }

  ReestablecerTodo(): void {
    this.actor = new Actor();
    this.nombreError = false;
    this.apellidoError = false;
    this.nacionalidadError = false;
    this.fechaDeNacimientoError = false;
  }

  agregar(): void{
    if (this.ValidarCampos() !== false) {
      this.actor.foto = './assets/descarga.jpeg';
      this.actores.crearActor(JSON.parse( JSON.stringify(this.actor))).then();
      alert('Se agregó el actor correctamente!');
      this.ReestablecerTodo();
    }
  }

  ValidarCampos(): boolean {
    let result = true;
    if (this.actor.nombre === '' || this.actor.nombre === undefined) {
      this.nombreError = true;
      result = false;
    }
    if (this.actor.apellido === '' || this.actor.apellido === undefined) {
      this.apellidoError = true;
      result = false;
    }
    if (this.actor.fechaDeNacimiento == null || this.actor.fechaDeNacimiento === undefined) {
      this.fechaDeNacimientoError = true;
      result = false;
    }

    return result;
  }

  volver(): void {
    this.auth.redirect('/actor/listado');
  }
}
