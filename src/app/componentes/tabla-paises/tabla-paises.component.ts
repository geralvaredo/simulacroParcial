import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paises} from '../../clases/paises';
import {PaisesService} from '../../servicios/paises.service';
import {Actor} from '../../clases/actor';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  listado: Array<any> = [];
  @Input() actor: Actor;
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  nacionalidad: Paises;
  public seleccionado: boolean;
  @Input() paisPelicula: boolean;

  constructor(private pais: PaisesService) { }

  ngOnInit(): void {
    this.obtenerPaises('');
    this.seleccionado = false;
  }

  obtenerPaises(region: string): void {
    this.pais.obtenerPaises(region).subscribe(
      (lista: Array<Paises>) => {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < lista.length; i++) {
          this.listado.push(new Paises(lista[i].name, lista[i].region, lista[i].flag, lista[i].capital));
        }
      });
  }

  guardarPais(pais: Paises): void{
    this.nacionalidad = pais;
    if(!this.paisPelicula){
      this.actor.nacionalidad = pais;
    }
    this.seleccionado = true;
    this.seleccionPais(pais);
  }

  public seleccionPais(pais: Paises): void {
    this.paisSeleccionado.emit(pais);
  }



}
