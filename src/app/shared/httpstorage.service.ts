import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MainURL } from './constant/config';

@Injectable({
  providedIn: 'root'
})
export class HttpstorageService {

  tokenresp: any;

  baseUrl = MainURL.HostUrl;

  constructor(private http: HttpClient, private router: Router) { }

  GenerateRefreshToken() {
    let input = {
      // "jwtToken": this.GetToken(),
      "refreshToken": this.GetRefreshToken()
    }
    return this.http.post(this.baseUrl + '/auth/refreshtoken', input);
  }

  getRoles() {
    return localStorage.getItem('roles') != null;
  }


  IsLogged() {
    return localStorage.getItem("token") != null;
  }

  GetToken() {
    return localStorage.getItem("token") || '';
  }

  GetRefreshToken() {
    return localStorage.getItem("refreshtoken") || '';
  }

  SaveTokens(tokendata: any) {
    localStorage.setItem('token', tokendata.accessToken);
    localStorage.setItem('refreshtoken', tokendata.refreshToken);
  }

  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  GetRolebyToken(token: any) {
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token))
    return this.tokenresp.role;
  }

  // GetMenubyrole(role: any) {
  //   return this.http.get(this.apiurl + 'GetMenubyRole/' + role)
  // }

  // HaveAccess(role: any, menu: any) {
  //   return this.http.get(this.apiurl + 'HaveAccess?role=' + role + '&menu=' + menu);
  // }



}
