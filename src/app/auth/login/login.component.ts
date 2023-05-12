import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { loginMaster } from 'src/app/shared/allModel';
// import { signin } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { ToastrService } from 'ngx-toastr';
import { loginMaster } from 'src/app/shared/allModel';
import { signin } from 'src/app/shared/allURL';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;

  loginMasterModel = new loginMaster()

  constructor(private fb: FormBuilder,private httpService:HttpmethodsService,private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get phone() {
    return this.loginform.get('phone');
  }

  get password() {
    return this.loginform.get('password');
  }

  get f() {
    return this.loginform.controls;
  }

  submit() {
    this.httpService.postRequest(signin, this.loginMasterModel).subscribe((data: any) => {
      console.log(data);
      if (data.accessToken && data.roles != 'roles') {
        this.toastr.success('Login Successfully...!', 'Success');
        localStorage.setItem("token", data.accessToken)
        this.router.navigateByUrl("/admin/layout/dashboard");
      }
      else {
        this.toastr.error("Something went Wrong.", "Error");
      }
    })
    
  }

   
}