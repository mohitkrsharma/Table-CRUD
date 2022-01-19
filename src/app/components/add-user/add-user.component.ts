import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(
    public toastr: ToastrService,
    public apiService: ApiService,
    public dialog: MatDialog,
    public table: TableComponent
  ) {}

  ngOnInit(): void {}

  /* adding new user methods */
  addUser(name: string, job: string): void {
    if (name === '' || job === '') {
      this.toastr.error('', 'Please enter fill all the fields');
    } else {
      const data = {
        name,
        job,
      };
      this.apiService.addUser(data).subscribe((response: any) => {
        this.toastr.success('', 'User added successfully');
      });
      this.dialog.closeAll();
    }
    this.table.test();
  }
}
