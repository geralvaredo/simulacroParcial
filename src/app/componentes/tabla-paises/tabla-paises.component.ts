import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private pais: PaisesService) { }

  ngOnInit(): void {
    this.obtenerPaises('Americas');
  }

  obtenerPaises(region: string): void {
    this.pais.obtenerPaises(region).subscribe(
      (lista: Array<Paises>) => {
        for (let i = 0; i < 5; i++) {
          this.listado.push(new Paises(lista[i].name, lista[i].region, lista[i].flag));
        }
      })   ;
    console.log(this.listado);

  }

  guardarPais(pais: string): void{
    console.log(pais);
    console.log(this.actor);
    this.actor.nacionalidad = pais.toString();
  }



}
