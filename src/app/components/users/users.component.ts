import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'phone', 'email', 'website', 'action'];
  users: IUser[]= [];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource<IUser>();
  
  
  constructor(private userService: UserService, private dialog: MatDialog) { }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginator;
  }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUserSubject().subscribe((data: IUser[]) => {
      this.dataSource.data = data;
    });
    this.userService.getUsers();
  }

  onDelete(id: number) {
   let name = this.userService.getUserById(id);
   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '300px',
    data: {
      name
    },
  });
  }
  
}
