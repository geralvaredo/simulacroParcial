import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Jugador} from '../../clases/jugador';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input() judadores: [Jugador];
  @Output() modificacion: EventEmitter<Jugador> = new EventEmitter();
  @Output() detalle: EventEmitter<Jugador> = new EventEmitter();
  @Output() borrar: EventEmitter<Jugador> = new EventEmitter();
  public mostrar = true;

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(jugador: Jugador): void {
    this.borrar.emit(jugador);
  }

  detalleJugador(jugador: Jugador): void {
    this.detalle.emit(jugador);
  }

  modificar(jugador: Jugador): void {
    this.modificacion.emit(jugador);
  }

  cambiarVista(): void{
    this.mostrar = !this.mostrar ;
  }

}
