import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { DeleteUpdateUserComponent } from '../delete-update-user/delete-update-user.component';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(public apiService: ApiService, public dialog: MatDialog) {}
  displayedColumns: string[] = [
    'avatar',
    'email',
    'firstname',
    'lastname',
    'action',
  ];
  dataSource: any;
  ngOnInit(): void {
    this.apiService.getUsers().subscribe((users: any) => {
      this.dataSource = users.data;
    });
  }
  addUpdate(userOption: any, el: any): void {
    this.apiService.setUserSelectedId(el.id);
    this.apiService.setUserSelectedOption(userOption);
    if (userOption === 'edit') {
      const dialogRef = this.dialog.open(DeleteUpdateUserComponent, {
        height: '350px',
        width: '700px',
      });
    }
    if (userOption === 'delete') {
      const dialogRef = this.dialog.open(DeleteUpdateUserComponent, {
        height: '250px',
        width: '500px',
      });
    }
  }

  /* adding new user */
  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      height: '350px',
      width: '700px',
    });
  }

  /* test method */
  test() {
    console.log('function calledfrom another component');
  }
}
