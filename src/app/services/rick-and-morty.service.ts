import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private readonly RICK_AND_MORTY_URL = 'https://rickandmortyapi.com/api/';
  private readonly CHARACTER_URL = `${this.RICK_AND_MORTY_URL}character`;
  constructor(private readonly http: HttpClient) { }

  isMultiple = false;

  getcharactersList(currentPage: number): Observable<any> {
    return this.http.get(`${ this.CHARACTER_URL}?page=${currentPage}`);
  }

  getCharacter(id: number): Observable<any>  {
    return this.http.get( `${this.CHARACTER_URL}/${id}`);
  }

  getMultipleCharacters(characters: string) {
    this.isMultiple = true;
    return this.http.get( `${this.CHARACTER_URL}/${characters}`);
  }

  getLocations(currentPage: number): Observable<any> {
    return this.http.get(`${this.RICK_AND_MORTY_URL}location?page=${currentPage}`);
  }

  getEpisode(currentPage: number): Observable<any>{
    return this.http.get(`${this.RICK_AND_MORTY_URL}episode?page=${currentPage}`);
  }

  search(type: string, name: string): Observable<any> {
    return this.http.get(`${this.RICK_AND_MORTY_URL}${type}/?name=${name}`);
  }
}
