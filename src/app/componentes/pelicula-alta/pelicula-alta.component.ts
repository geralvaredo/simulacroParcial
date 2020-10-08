import { Component, OnInit } from '@angular/core';
import {Actor} from '../../clases/actor';
import {Pelicula} from '../../clases/pelicula';
import {PeliculasService} from '../../servicios/peliculas.service';
import {Router} from '@angular/router';
import {ActoresService} from '../../servicios/actores.service';
import {AuthService} from '../../servicios/auth.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  public pelicula: Pelicula;
  public actor: Actor;
  listadoActores: Array<Actor>;

  public descError: boolean;
  public tipoError: boolean;
  public fechaDeVencError: boolean;
  public precioError: boolean;

  constructor(private peliculas: PeliculasService,
              private actores: ActoresService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.ReestablecerTodo();
    this.ObtenerActores();
  }

  ReestablecerTodo(): void {
    this.actor = null;
    this.pelicula = new Pelicula();
    this.pelicula.tipo = null;
    this.descError = false;
    this.tipoError = false;
    this.fechaDeVencError = false;
    this.precioError = false;
  }

  agregar(): void {
    if (this.ValidarCampos() !== false) {
      this.pelicula.foto = '../../../assets/descarga.jpeg';
      this.peliculas.crearPelicula(JSON.parse( JSON.stringify(this.pelicula)));
      // alert('Se agregó el pelicula correctamente!');
      this.ReestablecerTodo();
    }
  }


  ValidarCampos(): boolean{
    let result = true;
    if (this.pelicula.nombre === '' || this.pelicula.nombre === undefined) {
      this.descError = true;
      result = false;
    }
    if (this.pelicula.tipo === 'null' || this.pelicula.tipo === undefined) {
      this.tipoError = true;
      result = false;
    }
    if (this.pelicula.fechaDeEstreno == null || this.pelicula.fechaDeEstreno === undefined) {
      this.fechaDeVencError = true;
      result = false;
    }
    if (this.pelicula.cantidadDePublico == null || this.pelicula.cantidadDePublico === undefined) {
      this.precioError = true;
      result = false;
    }
    return result;
  }

  volver(): void {
    this.auth.redirect('/peliculas');
  }

  ObtenerActores(): void {
    this.actores.obtenerActores().then(x => {  this.listadoActores = x;  });
  }

}
