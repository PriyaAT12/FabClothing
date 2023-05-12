import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { bannerMaster, galleryMaster } from 'src/app/shared/allModel';
import { createGalleryMaster, fileupload, getAllGalleryMaster, updateGalleryMaster } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';

@Component({
  selector: 'app-gallerymaster',
  templateUrl: './gallerymaster.component.html',
  styleUrls: ['./gallerymaster.component.css']
})
export class GallerymasterComponent implements OnInit {
  issubmit: boolean = true
  isupdate: boolean = false
  GalleryMasterForm!: FormGroup;
  GalleryMasterModel = new galleryMaster()
  filetoupload: any;

  constructor(private fb: FormBuilder, private service: HttpmethodsService, private toastr: ToastrService) { }

  displayedColumns: string[] = [ 'Sr.No.','name', 'type','price','image','status','Action'];
  dataSource = new MatTableDataSource<bannerMaster>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild('epltable', { static: false }) epltable?: ElementRef;

  ngOnInit(): void {
    this.GalleryMasterForm = this.fb.group({
      name: ['',Validators.required],
      type: ['',Validators.required],
      price: ['' , Validators.required],
      image: ['', Validators.required],
      status:['', Validators.required],
      description:['', Validators.required],
    });
    this.getAllGallery()
  }
submit(){
  console.log(this.GalleryMasterModel);
    this.service.postRequest(createGalleryMaster, this.GalleryMasterModel).subscribe(
      (res) => {
        console.log(res);
        this.issubmit = true;
        this.isupdate = false;
        this.GalleryMasterForm.reset()
      })
}

update(){
  this.service
  .putRequest(updateGalleryMaster, this.GalleryMasterModel)
  .subscribe((res) => {
    console.log(res);
    this.toastr.success('Updated Successfully!');
    this.issubmit = true;
    this.isupdate = false;
  });
}

edit(item: any) {
  // console.log(item);
  this.GalleryMasterModel = item;
  this.issubmit = false;
  this.isupdate = true;
}

getAllGallery() {
  
  this.service.getwithHeaderRequest(getAllGalleryMaster).subscribe((data: any) => {
    this.dataSource = new MatTableDataSource(data);
    console.log(data)
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  })
}
handleFileInput(e: FileList | any) {
  this.filetoupload = e.target.files.item(0);
  this.service
    .fileUpload(fileupload, this.filetoupload)
    .subscribe((data: any) => {
      console.log(data);
      if (data.status == true) {
        this.GalleryMasterModel.image = data.path;
      } else {
        this.toastr.error(data.path, 'error!', { timeOut: 500 });
      }
    });
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
