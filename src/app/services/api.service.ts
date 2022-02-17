import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public api_get_users = environment.get_users;
  public api_get_selected_users = environment.get_selected_user;
  public api_update_selected_user = environment.update_selected_user;
  public api_delete_selected_user = environment.delete_selected_user;
  public add_user = environment.add_user;
  public validate_user = environment.validate_user;
  userSelectedOption = '';
  userSelectedId = 0;
  constructor(public http: HttpClient) {}

  /* get users data */
  getUsers(): any {
    return this.http.get(this.api_get_users);
  }

  /* set user selected option */
  setUserSelectedOption(userOpt: any) {
    this.userSelectedOption = userOpt;
  }

  /* get user selected option */
  getUserSelectedOption() {
    return this.userSelectedOption;
  }

  /* set user selected id */
  setUserSelectedId(id: any) {
    this.userSelectedId = id;
  }

  /* get user selected id */
  getUserSelectedId() {
    return this.userSelectedId;
  }

  /* get selected user data */
  getSelectedUserData(userId: any) {
    return this.http.get(this.api_get_selected_users + `${userId}`);
  }

  /* update users data */
  updateSelectedUser(userId: any, data: any): any {
    return this.http.put(this.api_update_selected_user + `${userId}`, data);
  }

  /* delete selected user */
  deleteSelectedUser(userId: any): any {
    return this.http.delete(this.api_delete_selected_user + `${userId}`);
  }

  /* add user */
  addUser(data: any): any {
    return this.http.post(this.add_user, data);
  }

  /* validate login */
  validateLogin(data: any): any {
    return this.http.post(this.validate_user, data);
  }
}
