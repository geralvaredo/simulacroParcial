import { Component, OnInit } from '@angular/core';
import {PaisesService} from '../../servicios/paises.service';
import {Pais} from '../../clases/pais';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

   listado: Array<Pais> = [];

  constructor(private pais: PaisesService) { }

  ngOnInit(): void {
  }

  actualizarRegion(region: string): void{
    while (this.listado.length > 0){
      this.listado.pop();
    }
    this.pais.obtenerPaises(region).subscribe(
      (lista: Array<Pais>) => {
        for (let i = 0; i < lista.length; i++) {
          this.listado.push(new Pais(lista[i].name, lista[i].region, lista[i].flag));
        }
      })   ;
    console.log(region);
    console.log(this.listado);
  }

  guardar(nombre: string): void {
    alert('El pais ' + nombre + ' se guardo con exito');
  }
  detalle(pais: any): void {
    alert('Pais: ' + pais.name + ' Region: ' + pais.region);
  }

}
