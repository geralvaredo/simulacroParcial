import {Component, Input, OnInit} from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {PrincipalElementosComponent} from '../principal-elementos/principal-elementos.component';
import {JugadoresService} from '../../servicios/jugadores.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.scss']
})
export class BorrarComponent implements OnInit {

  @Input() jugador: Jugador;

  constructor(public principal: PrincipalElementosComponent , private db: JugadoresService) { }

  ngOnInit(): void {
  }

  borrar(): void {
    this.db.eliminarJugador(this.jugador.id.toString());
    this.principal.delete = false;
    console.log(this.principal.jugador);
  }

  cancelar(): void {
    this.principal.delete = false;
  }

}
