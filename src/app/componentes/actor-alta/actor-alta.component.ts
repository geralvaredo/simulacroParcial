import { Component, OnInit } from '@angular/core';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';
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
  public sexoError: boolean;
  public paisError: boolean;

  constructor(private actores: ActoresService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.ReestablecerTodo();
  }

  ReestablecerTodo(): void {
    this.actor = new Actor();
    this.actores.contadorActores().subscribe(
        (lista) => {
          this.actor.id = (lista.length + 1).toString();
      }
    );
    this.nombreError = false;
    this.apellidoError = false;
    this.nacionalidadError = false;
    this.fechaDeNacimientoError = false;
    this.sexoError = false;
    this.paisError = false;
  }

  agregar(): void{
    if (this.ValidarCampos() !== false) {
       this.actor.foto = './assets/descarga.jpeg';
       this.actores.crearActor(JSON.parse( JSON.stringify(this.actor))).then();
       this.ReestablecerTodo();
    }
  }

  ValidarCampos(): boolean {
    let result = true;
    if (this.actor.nombre === null || this.actor.nombre === undefined) {
      this.nombreError = true;
      result = false;
    }
    if (this.actor.apellido === null || this.actor.apellido === undefined) {
      this.apellidoError = true;
      result = false;
    }
    if (this.actor.fechaDeNacimiento === null || this.actor.fechaDeNacimiento === undefined) {
      this.fechaDeNacimientoError = true;
      result = false;
    }

    if (this.actor.sexo === null || this.actor.sexo === undefined){
      this.sexoError = true ;
      result = false ;
    }
    if (this.actor.nacionalidad.name === null || this.actor.nacionalidad.name === undefined){
      this.paisError = true ;
      result = false ;
    }

    return result;
  }

  volver(): void {
    this.auth.redirect('/actor/listado');
  }
}
