/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {Jugador} from '../../clases/jugador';
import {JugadoresService} from '../../servicios/jugadores.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-principal-elementos',
  templateUrl: './principal-elementos.component.html',
  styleUrls: ['./principal-elementos.component.scss']
})
export class PrincipalElementosComponent implements OnInit {

   jugador: Array<Jugador> = [] ;
   jugadorModificar: Jugador;
   jugadorEliminar: Jugador;
   jugadorDetalle: Jugador;
   detail = false;
   modify = false;
   delete = false;



  constructor(private db: JugadoresService) {

  }

  ngOnInit(): void {
    this.cargaJugador();
  }

  cargaJugador(): void {

     this.db.obtenerJugadores().subscribe(
 (lista: Array<Jugador>) => {
          this.jugador = [];
          for (let i = 0; i < lista.length; i++) {
            this.jugador.push(new Jugador(lista[i].id, lista[i].nombre, lista[i].apellido, lista[i].nacimiento, lista[i].foto));
          }
        });

    console.log(this.jugador);
  }

  listaDetalle(jugador: Jugador): any {
    this.detail = true;
    this.delete = false;
    this.modify = false;
    this.jugadorDetalle = jugador;
  }
  modificacion(jugador: Jugador): any {
    this.detail = false;
    this.delete = false;
    this.modify = true;
    this.jugadorModificar = jugador;
  }
  eliminar(jugador: Jugador): any {
    this.detail = false;
    this.delete = true;
    this.modify = false;
    this.jugadorEliminar = jugador;
  }
  cargaManual(){
    /*this.db.getJugadores().subscribe(
      (lista: Array<Jugador>) => {
        for (let i = 0; i < lista.length; i++) {
            this.db.agregarJugador((new Jugador(lista[i].id, lista[i].nombre, lista[i].apellido, lista[i].nacimiento, lista[i].foto)));
        }
      }
    )*/
  }

}
