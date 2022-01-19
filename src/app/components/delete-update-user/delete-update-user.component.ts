import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'delete-add-update-user',
  templateUrl: './delete-update-user.component.html',
  styleUrls: ['./delete-update-user.component.css'],
})
export class DeleteUpdateUserComponent implements OnInit {
  selectedValue: string = '';
  selectedId = 0;
  editForm!: FormGroup;
  apiData: any;
  email = '';
  first_name = '';
  last_name = '';
  avatar_img: any;
  constructor(
    public apiService: ApiService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    public dialog: MatDialog
  ) {
    this.editForm = this.fb.group({
      email: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit(): void {
    this.selectedValue = this.apiService.getUserSelectedOption();
    this.selectedId = this.apiService.getUserSelectedId();
    this.apiService
      .getSelectedUserData(this.selectedId)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.apiData = resp.data;
        this.email = this.apiData.email;
        this.first_name = this.apiData.first_name;
        this.last_name = this.apiData.last_name;
        this.avatar_img = this.apiData.avatar;
      });
  }

  /* Saving the edited details of the user */
  submit(e_mail: any, fname: any, lname: any) {
    if (e_mail === '' || fname === '' || lname === '') {
      this.toastr.error('', 'Please enter all the fields');
    } else {
      this.apiService
        .getSelectedUserData(this.selectedId)
        .subscribe((response: any) => {
          this.avatar_img = response.data.avatar;
        });
      const data = {
        id: this.selectedId,
        email: e_mail,
        first_name: fname,
        last_name: lname,
        avatar: this.avatar_img,
      };
      this.apiService
        .updateSelectedUser(this.selectedId, data)
        .subscribe((response: any) => {
          console.log(response);
          this.toastr.success('', 'Data edited successfully');
          this.dialog.closeAll();
        });
    }
  }

  /* deleting the selected user */
  deleteUser() {
    this.apiService
      .deleteSelectedUser(this.selectedId)
      .subscribe((response: any) => {
        console.log(response);
        this.toastr.success('', 'User deleted successfully');
      });
    this.dialog.closeAll();
  }
}
