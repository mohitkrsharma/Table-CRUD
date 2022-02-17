import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  constructor(public router: Router, public apiService: ApiService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  /* function to validate login credentials */
  login() {
    this.apiService
      .validateLogin(this.loginForm.value)
      .subscribe((response: any) => {
        debugger;
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('table');
      });
  }
}
