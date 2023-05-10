import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainURL } from './constant/config';
import { HttpstorageService } from './httpstorage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpmethodsService {
  token: any

  constructor(private http: HttpClient, private https: HttpstorageService) { }
  baseUrl = MainURL.HostUrl;



  // => Post method with header & without Headers starts <= \\

  postRequest(url: string, body: any) {
    return this.http.post(this.baseUrl + url, body)
  }

  postwithHeaderRequest(url: string, body: any) {
    this.token = localStorage.getItem('token')
    let head_obj = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`)
    return this.http.post(this.baseUrl + url, body, { headers: head_obj })
  }

  // => Post method with header & without Headers ends <= \\



  // => Get method with header & without Headers starts <= \\

  getRequest(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  getwithHeaderRequest(url: string) {
    // this.token = localStorage.getItem('token')
    let head_obj = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`)
    return this.http.get(this.baseUrl + url, { headers: head_obj })
  }
  // => Get method with header & without Headers ends <= \\


  // => put method with header & without Headers starts <= \\
  putRequestHeader(url: string, body: any) {
    // this.token = localStorage.getItem('token')
    let head_obj = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('token')}`)
    return this.http.put(this.baseUrl + url, body, { headers: head_obj })
  }

  putRequest(url: string, body: any) {
    return this.http.put(this.baseUrl + url, body)
  }
  // => put method with header & without Headers starts <= \\


  deleteRequest(url: string, id: number) {
    return this.http.delete(this.baseUrl + url + "/" + id);
  }


  public fileUpload(url: string, formData: File) {
    const uploadfile: FormData = new FormData();
    uploadfile.append('uploadfiledata', formData);
    return this.http.post(this.baseUrl + url, uploadfile);
  }

  public roleMatch(allowedRoles: any): any {
    let isMatch: boolean = false;
    const userRoles: any = this.https.getRoles();
    // console.log(userRoles);
    return userRoles
    // if (userRoles != null && userRoles) {
    //   for (let i = 0; i < userRoles.length; i++) {
    //     for (let j = 0; j < allowedRoles.length; j++) {
    //       if (userRoles === allowedRoles[j]) {
    //         isMatch = true;
    //         return isMatch;
    //       } else {
    //         return isMatch;
    //       }
    //     }
    //   }
    // }
  }


}