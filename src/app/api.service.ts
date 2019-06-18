import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentArticle: any;
  constructor(private http: HttpClient) { }

  data(url) {
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:1234');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    const sendurl = `${url}`;
    console.log(url);
    return this.http.get<any>(sendurl, httpOptions).pipe(
      tap(_ => this.log(`Fetched List`)),
      catchError(this.handleError<any>(`error`))
    );

    //return this.http.get(url);

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error, any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log("Log message: " + message);
  }
}
