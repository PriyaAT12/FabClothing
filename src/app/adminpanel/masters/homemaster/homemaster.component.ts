import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { mainlineMaster } from 'src/app/shared/allModel';
// import { getAllMainlineMaster, mainline } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homemaster',
  templateUrl: './homemaster.component.html',
  styleUrls: ['./homemaster.component.css']
})
export class HomemasterComponent implements OnInit {

  adminId: any
  issubmit: boolean = true
  isupdate: boolean = false
  public isVisible: boolean = false;
  Role!: string;

  registerationForm!: FormGroup;
  mainlineMasterModel = new mainlineMaster()

  constructor(private fb: FormBuilder, private service: HttpmethodsService, private toastr: ToastrService) { }

  displayedColumns: string[] = [ 'startNumber', 'endNumber','status'];
  dataSource = new MatTableDataSource<mainlineMaster>();
  @ViewChild(MatSort, { static: true }) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild('epltable', { static: false }) epltable: ElementRef | undefined;
  ngOnInit(): void {
    this.Role = String(localStorage.getItem("roles"))
    this.registerationForm = this.fb.group({
      startNumber: [''],
      endNumber: [''],
      status: [''],
      admin_id: ['']
    })
    this.getAllNumber();
  }

  // to submit the data
  submit() {
    // console.log(this.mainlineMasterModel);
    // this.adminId = localStorage.getItem('adminId')
    // console.log(this.adminId);
    // this.mainlineMasterModel.admin_id = Number(localStorage.getItem('adminId'))
    // this.service.postRequest(mainline, this.mainlineMasterModel).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.isVisible = true;
    //     this.registerationForm.reset()
    //     setTimeout(() => this.isVisible = false, 2500)
    //   })
  }

  // to update the data
  update() {

  }

 
  getAllNumber() {
    
    // this.service.getwithHeaderRequest(getAllMainlineMaster).subscribe((data: any) => {
    //   this.dataSource = new MatTableDataSource(data);
    //   console.log(data)
    //   if (this.paginator) {
    //     this.dataSource.paginator = this.paginator;
    //   }
    // })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}