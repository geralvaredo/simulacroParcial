import {Component, Input, OnInit} from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {PrincipalElementosComponent} from '../principal-elementos/principal-elementos.component';
import {JugadoresService} from '../../servicios/jugadores.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent implements OnInit {

  @Input() jugador: Jugador;

  constructor(public principal: PrincipalElementosComponent, private db: JugadoresService) { }

  ngOnInit(): void {
  }

  modificar(): void{
    this.db.modificarJugador(this.jugador)  ;
    this.principal.modify = false;
  }
  cancelar(): void{
    this.principal.modify = false;
  }

}
