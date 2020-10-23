import {Actor} from './actor';

export class Pelicula {
    id: string ;
    nombre: string ;
    tipo: string ;
    fechaDeEstreno: Date ;
    cantidadDePublico: number;
    foto: string ;
    actor: Actor ;
}
