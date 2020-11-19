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
  public cantActores = 0;


  constructor( private actores: ActoresService,
               private miRouter: Router) { }



  ngOnInit(): void {
  }

  public cantidadDeActores(): number {
    return this.cantActores = this.listadoActores.length;
  }


}
