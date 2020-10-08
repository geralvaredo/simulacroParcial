import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../clases/pelicula';
import {PeliculasService} from '../../servicios/peliculas.service';
import {Router} from '@angular/router';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;

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

  agregarPelicula(): void {
      this.auth.redirect('/peliculas/alta');
  }

}
