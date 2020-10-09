import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private api: HttpClient) { }

  obtenerPaises(region: string): Observable<any> {
    return this.api.get(environment.urlPaises + region);
  }

}
