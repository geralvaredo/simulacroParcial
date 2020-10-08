/* tslint:disable */
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Jugador} from '../clases/jugador';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {


  constructor(private api: HttpClient, private db: AngularFirestore) { }


  getJugadores(): Observable<any>{
    return this.api.get(environment.jugadores);
  }

  obtenerJugadores(): Observable<any> {
    return this.db.collection("jugadores").valueChanges();
  }

   agregarJugador(jugador: Jugador){
     return this.db.collection('jugadores').doc(jugador.id.toString()).set({
         id: jugador.id,
         nombre: jugador.nombre,
         apellido: jugador.apellido,
         nacimiento: jugador.nacimiento,
         foto : (jugador.foto) !== null || (jugador.foto) !== undefined ? jugador.foto :  "https://www.adl-logistica.org/wp-content/uploads/2019/07/imagen-perfil-sin-foto.png"
       }
     ).catch(error => {
        console.log('Error al agregar un jugador' + error);
     });
  }

  eliminarJugador(id: string){
    this.db.collection('jugadores').doc(id).delete().then(() => console.log("Borrado Exitoso")).catch(
      (error) => console.log(error));
  }

  modificarJugador(jugador: object){
        this.db.collection('jugadores').doc(jugador['id']).update({
      id: jugador['id'],
      nombre: jugador['nombre'],
      apellido: jugador['apellido'],
      nacimiento: jugador['nacimiento'],
      foto : jugador['foto']
    })
  }

/*
  cargarImagenesFirebase( imagenes: FileItem[] ) {
    // console.log( imagenes );
    private CARPETA_IMAGENES = '';
    const storageRef = firebase.storage().ref();

    for ( const item of imagenes) {
      item.estaSubiendo = true;
      if ( item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask =
        storageRef.child(`${ this.CARPETA_IMAGENES }/${ item.nombreArchivo}`)
        .put( item.archivo );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
          item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.error( 'Error al subir', error ),
        () => {
          console.log('Imagen cargada correctamente');
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarImagen({
            nombre: item.nombreArchivo,
            url: item.url
          });
        });

    }
  }

  private guardarImagen( imagen: { nombre: string, url: string } ) {
    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
    .add( imagen );
  }

*/



}
