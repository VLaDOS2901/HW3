import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './userObject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserByLogin(login: string): Observable<IUser>{
    return this.http.get<IUser>('https://api.github.com/users/'+login);
  }
}
