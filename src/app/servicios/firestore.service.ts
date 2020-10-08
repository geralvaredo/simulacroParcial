import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  obtenerColeccion(collection): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(collection).valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }


  obtenerUnDocumento(collection, id): Promise<any[]> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(`${collection}`).doc(id).valueChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  agregarDocumento(objeto: any, collection: string): any {
    const id = this.db.createId();
    objeto.id = id;
    return this.db.collection(collection).doc(id).set(objeto);
  }

  modificarDocumento(objeto: any, collection: string): any {
    const id = objeto.id;
    const objetoDoc = this.db.doc<any>(`${collection}/${id}`);
    return objetoDoc.update(objeto);
  }

  borrarDocumento(id: any, collection: string): any {
    const objetoDoc = this.db.collection(`${collection}`).doc(id);
    return objetoDoc.delete();
  }


}
