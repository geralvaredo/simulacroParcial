import {Component, Input, OnInit} from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {PrincipalElementosComponent} from '../principal-elementos/principal-elementos.component';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input() jugador: Jugador;

  constructor(public detalle: PrincipalElementosComponent) { }

  ngOnInit(): void {
  }

  limpiar(): void{
    this.detalle.detail = false;
  }

}
