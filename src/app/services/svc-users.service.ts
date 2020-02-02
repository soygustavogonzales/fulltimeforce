import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvcUsersService {

  constructor(
    private Http: HttpClient
  ) { }
  GetAny() {
    return "h"
  }
  GetUsers(): Observable<any> {
    return this.Http.get<any>('https://jsonplaceholder.typicode.com/posts/1').pipe(
      retry(1)
    )
  }
}
