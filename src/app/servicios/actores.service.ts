import { Injectable } from '@angular/core';
import {Pelicula} from '../clases/pelicula';
import {FirestoreService} from './firestore.service';
import {Observable} from 'rxjs';
import {Actor} from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private fire: FirestoreService) { }

  public obtenerActoresPorId(id: number): any {
    return this.fire.obtenerUnDocumento('actores', id);
  }

  public obtenerActores(): any {
    return this.fire.obtenerColeccion('actores');
  }

  public crearActor(actor: Actor): any {
    return this.fire.agregarDocumento(actor, 'actores');
  }

  public modificarActor(actor: Actor): any {
    return this.fire.modificarDocumento(actor, 'actores');
  }

  public borrarActorId(id: string): any {
    return this.fire.borrarDocumento(id, 'actores');
  }

  public contadorActores(): Observable<any> {
    return this.fire.obtenerTotalDocumentos('actores');
  }

}
