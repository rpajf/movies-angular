import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; // import HttpClient
import { Observable, tap, of, map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private totalItems = 100;

  private apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';
  constructor(private http: HttpClient) {} // inject HttpClient
  getData(page: number = 1): Observable<any> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjk0NjZiNzU3YzZmY2Y2M2U0OTI3ZGRhNmZhNTIwOSIsInN1YiI6IjYxMjJmYTA1ODc0MWM0MDAyYjRjY2I3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caTD5cKsKsaNysIadIIzhikQJNxtoLKU72H3TVgeh0A',
    });
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get<any>(url, {
      headers: headers,
    });
  }
  getItems(page = 1, itemsPerPage = 10): Observable<string[]> {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = [];
    for (let i = startIndex; i < endIndex; i++) {
      if (i < this.totalItems) {
        items.push(`Item ${i + 1}`);
      }
    }
    return of(items).pipe(delay(500));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
