import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; // import HttpClient
import { Observable, tap, of, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
// const api_key = '54ffed57deb5a7a8688be4de3007e578';
// const BASE_URL = 'https://api.themoviedb.org/3';
export class DataService {
  private apiUrl =
    // 'https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578';
    // 'https://api.themoviedb.org/3/movie/now_playing';
    'https://api.themoviedb.org/3/movie/now_playing';


  constructor(private http: HttpClient) {} // inject HttpClient
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjk0NjZiNzU3YzZmY2Y2M2U0OTI3ZGRhNmZhNTIwOSIsInN1YiI6IjYxMjJmYTA1ODc0MWM0MDAyYjRjY2I3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caTD5cKsKsaNysIadIIzhikQJNxtoLKU72H3TVgeh0A',
    });
    return this.http.get<any>(this.apiUrl, {
      headers: headers,
    });
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
