import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { loginMaster } from 'src/app/shared/allModel';
// import { signin } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;

  // loginMasterModel = new loginMaster()

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
    // this.httpService.postRequest(signin, this.loginMasterModel).subscribe((data: any) => {
    //   console.log(data);
    //   if (data.accessToken && data.roles != 'ROLE_USER') {
    //     this.toastr.success('Login Successfully...!', 'Success');
    //     localStorage.setItem("token", data.accessToken)
    //     localStorage.setItem("adminId", data.admin_id),
    //     localStorage.setItem("subadminId", data.sub_admin_id),
    //     localStorage.setItem("distributerId", data.distributor_id),
    //     localStorage.setItem("retailerId", data.retailer_id),
    //     localStorage.setItem("roles", data.roles) 
    //     localStorage.setItem("Id", data.id),
    //     localStorage.setItem('refreshtoken', data.refreshToken);
    //     // this.isVisible = true;
    //     // setTimeout(() => this.isVisible = false, 2500)
    //     this.router.navigateByUrl("/admin/layout");
    //     // this.UserLoginForm.reset();
    //   }
    //   else {
    //     this.toastr.error("Something went Wrong.", "Error");
    //   }
    // })
    
  }

   
}