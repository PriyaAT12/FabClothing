import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';
import { ToastrService } from 'ngx-toastr';
import { bannerMaster } from 'src/app/shared/allModel';
import { createBanner, fileupload, getAllBannermaster, updateBanner } from 'src/app/shared/allURL';

@Component({
  selector: 'app-homemaster',
  templateUrl: './homemaster.component.html',
  styleUrls: ['./homemaster.component.css']
})
export class HomemasterComponent implements OnInit {

  issubmit: boolean = true
  isupdate: boolean = false

  BannerMasterForm!: FormGroup;
  BannerMasterModel = new bannerMaster()
  filetoupload: any;

  constructor(private fb: FormBuilder, private service: HttpmethodsService, private toastr: ToastrService) { }

  displayedColumns: string[] = [ 'Sr.No.','bannerName', 'startDate','status','Action'];
  dataSource = new MatTableDataSource<bannerMaster>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild('epltable', { static: false }) epltable?: ElementRef;
  ngOnInit(): void {
    this.BannerMasterForm = this.fb.group({
      bannerName: ['',Validators.required],
      bannerDescription: ['',Validators.required],
      bannerType: ['' , Validators.required],
      bannerPath: ['', Validators.required],
      status:['', Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required]
    })
    this.getAllBanner();
  }

  // to submit the data
  submit() {
    console.log(this.BannerMasterModel);
    this.service.postRequest(createBanner, this.BannerMasterModel).subscribe(
      (res) => {
        console.log(res);
        this.issubmit = true;
        this.isupdate = false;
        this.BannerMasterForm.reset()
      })
  }

  handleFileInput(e: FileList | any) {
    this.filetoupload = e.target.files.item(0);
    this.service
      .fileUpload(fileupload, this.filetoupload)
      .subscribe((data: any) => {
        console.log(data);
        if (data.status == true) {
          this.BannerMasterModel.bannerPath = data.path;
        } else {
          this.toastr.error(data.path, 'error!', { timeOut: 500 });
        }
      });
  }

  // to update the data
  update() {
    this.service
      .putRequest(updateBanner, this.BannerMasterModel)
      .subscribe((res) => {
        console.log(res);
        this.toastr.success('Updated Successfully!');
        this.issubmit = true;
        this.isupdate = false;
      });
  }
  edit(item: any) {
    // console.log(item);
    this.BannerMasterModel = item;
    this.issubmit = false;
    this.isupdate = true;
  }
 
  getAllBanner() {
    this.service.getwithHeaderRequest(getAllBannermaster).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}