import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment.prod';
import { PaisBanderaComponent } from './componentes/pais-bandera/pais-bandera.component';
import { RegionesComponent } from './componentes/regiones/regiones.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PrincipalElementosComponent } from './componentes/principal-elementos/principal-elementos.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    PaisBanderaComponent,
    RegionesComponent,
    PrincipalComponent,
    PrincipalElementosComponent,
    ListadoComponent,
    BorrarComponent,
    ModificarComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
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
