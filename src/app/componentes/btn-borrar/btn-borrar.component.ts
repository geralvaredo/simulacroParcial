import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../clases/actor';
import {ActoresService} from '../../servicios/actores.service';
import {Pelicula} from '../../clases/pelicula';

@Component({
  selector: 'app-btn-borrar',
  templateUrl: './btn-borrar.component.html',
  styleUrls: ['./btn-borrar.component.scss']
})
export class BtnBorrarComponent implements OnInit {

  @Input() peliculaBorrar: Pelicula;
  @Output() actorBorrado: EventEmitter<any> = new EventEmitter<any>();


  constructor(private ac: ActoresService) { }

  ngOnInit(): void {
  }

  onBorrar(): void{
    this.actorBorrado.emit(this.peliculaBorrar);
  }

}
