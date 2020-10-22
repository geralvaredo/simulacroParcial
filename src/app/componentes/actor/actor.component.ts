import { Component, OnInit } from '@angular/core';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  public listadoActores: Array<Actor>;
  public mostrarListado = true;
  public actorBorrado: Actor;
  public cantActores = 0;


  constructor( private actores: ActoresService,
               private miRouter: Router) { }



  ngOnInit(): void {
  }

  public MostrarBorradoYActualizarLista( actor: Actor): void {
    this.actorBorrado = actor;
    this.listadoActores = this.listadoActores.filter(item => item.id !== actor.id);
    this.mostrarListado = false;
  }

  public cantidadDeActores(): number {
    return this.cantActores = this.listadoActores.length;
  }

  public IrAModificarClick(actor: Actor): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: actor.id,
        nombre: actor.nombre,
        apellido: actor.apellido,
        fechaDeNacimiento: actor.fechaDeNacimiento,
        foto: actor.foto
      }
    };
    this.miRouter.navigate(['/actor/modificar'], navigationExtras);
  }

}
