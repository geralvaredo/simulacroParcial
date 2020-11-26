import {Component, Input, OnInit} from '@angular/core';
import {Actor} from '../../clases/actor';
import {Paises} from '../../clases/paises';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() actor: Actor;
  @Input() nacionalidad: Paises;
  constructor() { }

  ngOnInit(): void {
  }

}
