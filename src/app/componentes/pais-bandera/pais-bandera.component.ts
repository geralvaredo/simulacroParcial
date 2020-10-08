import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pais-bandera',
  templateUrl: './pais-bandera.component.html',
  styleUrls: ['./pais-bandera.component.scss']
})
export class PaisBanderaComponent implements OnInit {

  @Input() pais;
  @Output() guardar: EventEmitter<string> = new EventEmitter();
  @Output() detalle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  guardarPais(nombre: string): any{
    this.guardar.emit(nombre);
  }
  detallePais(pais: any): any{
    this.detalle.emit(pais);
  }

}
