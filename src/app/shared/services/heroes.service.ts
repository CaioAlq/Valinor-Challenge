import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl = 'https://api.opendota.com/api/constants'

  constructor(private http: HttpClient) { }

  public getHeroesData(params: string):Observable<object> {
    return this.http.get<object>(this.apiUrl + params).pipe(
      map((JSONHeroes) => {
      return Object.values(JSONHeroes)
      }), 
      tap(console.log))
  }
}
