import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  getComments(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.url}/users`)
  }

}
