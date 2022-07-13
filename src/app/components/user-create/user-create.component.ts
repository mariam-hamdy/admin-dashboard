import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }


  addNewUser(addUserForm: NgForm) {

    if (addUserForm.valid) {
      let user: IUser = {
        id: 0,
        name: addUserForm.controls['username']?.value,
        phone: addUserForm.controls['phone']?.value,
        email: addUserForm.controls['email']?.value,
        website: addUserForm.controls['website']?.value
      }
      this.userService.addUser(user);
      this.snackBar.open("Added Successfully", "X",{
        duration: 3000
      });
      this.router.navigate(['/users']);

    }
  }
}
