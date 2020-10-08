import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private api: HttpClient) { }

  obtenerPaises(region: string): Observable<any> {
    return this.api.get(environment.urlPaises + region);
  }

}
