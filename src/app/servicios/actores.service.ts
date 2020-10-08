import { Injectable } from '@angular/core';
import {Pelicula} from '../clases/pelicula';
import {FirestoreService} from './firestore.service';

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

  public crearActor(peli: Pelicula): any {
    return this.fire.agregarDocumento(peli, 'actores');
  }

  public modificarActor(peli: Pelicula): any {
    return this.fire.modificarDocumento(peli, 'actores');
  }

  public borrarActorId(id: string): any {
    return this.fire.borrarDocumento(id, 'actores');
  }
}
