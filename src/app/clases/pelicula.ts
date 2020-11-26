import {Actor} from './actor';
import {Paises} from './paises';

export class Pelicula {
    id: string ;
    nombre: string ;
    tipo: string ;
    fechaDeEstreno: Date ;
    cantidadDePublico: number;
    foto: string ;
    nacionalidad: Paises;
    actor: Actor ;
}
