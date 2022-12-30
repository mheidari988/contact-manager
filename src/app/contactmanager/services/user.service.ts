import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://angular-material-api.azurewebsites.net/users';
  private dataStore: {
    users: User[]
  };
  private _users = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] }
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  getAll() {
    this.http.get<User[]>(this.apiUrl)
      .subscribe(
        {
          next: (data) => {
            this.dataStore.users = data;
            this._users.next(Object.assign({}, this.dataStore).users);
          },
          error: (err) => {
            console.log(err.error.message);
          }
        }
      )
  }

  getUserById(id: number) {
    return this.dataStore.users.find(u => u.id == id);
  }
}
