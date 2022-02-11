import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(private readonly http: HttpClient) { }


  getcharactersList(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getCharacter(id: number): Observable<any>  {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
