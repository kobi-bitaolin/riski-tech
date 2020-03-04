import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TheMovieDBService {

baseUrl:string = 'https://api.themoviedb.org/3/search/movie?';
apiKey:string =  '3ea150464035bc92e08e1ecfd93b9557';


  constructor(private http: HttpClient) { }

  getMovies(query: string) {
    let url = `${this.baseUrl}api_key=${this.apiKey}&language=enUS&query=${query}&page=1&include_adult=false`
    return this.http.get(url)
  }
}