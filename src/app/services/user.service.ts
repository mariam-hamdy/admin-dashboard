import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[]=[];
  userSubject = new Subject<IUser[]>();

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get(environment.serverUrl+'users').subscribe((data) => {
      this.users= data as IUser[];
    });
    
  }

  getUserSubject(){
    console.log(this.users);
  }

}
