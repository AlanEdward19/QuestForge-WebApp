import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../enviroment";
import {Character} from "../models/character.model";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseUrl: string = `${environment.baseUrl}/Character`;

  constructor(private http: HttpClient) { }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(this.baseUrl, {
      params: {
        id: id
      }
    });
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>( `${this.baseUrl}/list`);
  }
}
