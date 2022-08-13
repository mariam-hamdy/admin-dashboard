import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
    //here I emit so in the component I listen on it only
    if(this.users.length == 0) {
      this.http.get(environment.serverUrl+'users').subscribe((data: any) => {
        this.users= this.users.concat(data as IUser[]);
        this.userSubject.next([...this.users]);
      });
    }else {
      this.userSubject.next([...this.users]);
    } 
  }

  getUserSubject(): Observable<IUser[]>{
    //here I return the userSubject which I can listen on it or subscribe
    //but I CAN'T EMIT
    //I only emit the event on the service
   return this.userSubject.asObservable();
  }

  getUserById(id: number): string {
    return this.users.filter(row => row.id == id)[0]?.name;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(row => row.id != id);
    this.userSubject.next([...this.users]);
  }

  addUser(user: IUser) {
    user.id = this.users.length + 1;
    this.users.push(user);
    this.userSubject.next([...this.users]);
  }
}
