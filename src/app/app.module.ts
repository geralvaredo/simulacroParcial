import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import {RouterModule} from '@angular/router';
import { ActorComponent } from './componentes/actor/actor.component';
import { BtnBuscarComponent } from './componentes/btn-buscar/btn-buscar.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetalleActoresComponent } from './componentes/detalle-actores/detalle-actores.component';
import { BtnBorrarComponent } from './componentes/btn-borrar/btn-borrar.component';
import { BtnModificarComponent } from './componentes/btn-modificar/btn-modificar.component';
import { ActorPeliculaComponent } from './componentes/actor-pelicula/actor-pelicula.component';
import { BtnDetalleComponent } from './componentes/btn-detalle/btn-detalle.component';
import { PaisPeliculaComponent } from './componentes/pais-pelicula/pais-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    BienvenidoComponent,
    TablaActorComponent,
    CabeceraComponent,
    PeliculasComponent,
    ActorComponent,
    BtnBuscarComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
    DetalleActoresComponent,
    BtnBorrarComponent,
    BtnModificarComponent,
    ActorPeliculaComponent,
    BtnDetalleComponent,
    PaisPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
