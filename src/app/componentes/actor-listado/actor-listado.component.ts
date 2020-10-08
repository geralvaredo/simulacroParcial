import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
