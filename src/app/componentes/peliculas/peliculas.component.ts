import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../clases/pelicula';
import {PeliculasService} from '../../servicios/peliculas.service';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;
  public cantidadPeliculas: number;
  constructor(private pelicula: PeliculasService, private auth: AuthService ) { }

  ngOnInit(): void {
    this.peliculaServicio();
  }

  private peliculaServicio(): any{
    this.pelicula.obtenerPeliculas().then(
      data => {this.peliculas = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
               console.log(data);
      });
  }

  cantidadDePeliculas(): number {
    return this.cantidadPeliculas = this.peliculas.length;
  }

  agregarPelicula(): void {
      this.auth.redirect('/peliculas/alta');
  }

}
