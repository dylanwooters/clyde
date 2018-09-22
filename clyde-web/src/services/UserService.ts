import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../../../clyde-common/models/User';
import { AppSettings } from '../app/app.settings';

@Injectable({ providedIn: 'root' })
export class UserService {
  
  broadcastError$: Observable<any>;
  private error = new Subject<any>();
  private userUrl =  AppSettings.API_ENDPOINT + 'user';  // URL to web api

  constructor(
    private http: HttpClient) { 
      this.broadcastError$ = this.error.asObservable();
    }

    broadcastError(data) {
      this.error.next(data);
    }

  /** GET: get User from API */
  getUser (userId: number): Observable<User> {
    return this.http.get<User>(this.userUrl + "/" + userId).pipe(
      tap((user: User) => this.log(`Retrieved user with Id = ${user.Id}`)),
      catchError(this.handleError<User>('getUser'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(`${operation} failed`); // log to console instead
      console.log(error);

      this.broadcastError(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    console.log('UserService: ' + message);
  }
}