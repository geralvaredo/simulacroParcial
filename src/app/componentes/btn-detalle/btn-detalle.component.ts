import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';

@Component({
  selector: 'app-btn-detalle',
  templateUrl: './btn-detalle.component.html',
  styleUrls: ['./btn-detalle.component.scss']
})
export class BtnDetalleComponent implements OnInit {

  @Input() verDetalle = true;
  @Input() actor: Actor;
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  public seleccion(): void{
    this.actorSeleccionado.emit(this.actor);
  }


}
