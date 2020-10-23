import { Injectable } from '@angular/core';
import {Pelicula} from '../clases/pelicula';
import {FirestoreService} from './firestore.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private fire: FirestoreService) { }

  public obtenerPeliculaPorId(id: number): any {
    return this.fire.obtenerUnDocumento('peliculas', id);
  }

  public obtenerPeliculas(): any {
    return this.fire.obtenerColeccion('peliculas');
  }

  public crearPelicula(peli: Pelicula): any {
    return this.fire.agregarDocumento(peli, 'peliculas');
  }

  public modificarPelicula(peli: Pelicula): any {
    return this.fire.modificarDocumento(peli, 'peliculas');
  }

  public borrarPeliculaPorId(id: string): any {
    return this.fire.borrarDocumento(id, 'peliculas');
  }

  public contadorPeliculas(): Observable<any> {
    return this.fire.obtenerTotalDocumentos('peliculas');
  }
}
