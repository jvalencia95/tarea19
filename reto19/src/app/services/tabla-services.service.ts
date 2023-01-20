import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tabla } from '../models/tabla';

@Injectable({
  providedIn: 'root'
})
export class TablaServicesService {

  url = environment.apiUrl + "/albums"

  constructor(private http: HttpClient) { }

  getData(): Observable<Tabla[]> {
    return this.http.get<Tabla[]>(this.url)
  }
}



