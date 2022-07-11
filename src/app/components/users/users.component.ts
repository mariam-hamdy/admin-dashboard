import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
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
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name', 'phone', 'email', 'website', 'action'];
  users: IUser[]= [];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource<IUser>();
  
  
  constructor(private userService: UserService, private dialog: MatDialog, private snackBar: MatSnackBar) { }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginator;
    this.dataSource.sort = this.sort;
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
    disableClose:true,
    data: {
      name
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      this.userService.deleteUser(id);
      this.snackBar.open(name+ " deleted successfully", "X",{
        duration: 3000
      });
    }
  });
  }
  
}
