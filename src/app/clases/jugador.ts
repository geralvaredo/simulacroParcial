export class Jugador {
  id: number;
  nombre: string;
  apellido: string;
  nacimiento: string;
  foto: string;

  constructor(id?: number, nombre?: string , apellido?: string , nacimiento?: string, foto?: string) {
   this.id = id;
   this.nombre = nombre;
   this.apellido = apellido;
   this.nacimiento = nacimiento;
   this.foto = foto;
  }
}
