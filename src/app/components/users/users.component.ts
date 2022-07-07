import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]= [
    {id: 1, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'},
    {id: 2, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'},
    {id: 3, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'},
    {id: 4, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'},
    {id: 5, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'},
    {id: 5, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'},
    {id: 5, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'},
    {id: 5, name: 'mariam hamdy', phone: '0118288', email: 'mariam@gmail.co', website: 'mariam@gmail.com'}
  ];

  displayedColumns: string[] = ['name', 'phone', 'email', 'website'];
  dataSource = this.users;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

  
}
