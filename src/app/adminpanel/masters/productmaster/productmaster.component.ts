import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { bannerMaster, productMaster } from 'src/app/shared/allModel';
import { createProductMaster, fileupload, getActiveSeason, getAllProductMaster, updateProduct } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';

@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class ProductmasterComponent implements OnInit {
  issubmit: boolean = true
  isupdate: boolean = false

  ProductMasterForm!: FormGroup;
  ProductMasterModel = new productMaster()
  filetoupload: any;
  foods:any
  season:any

  constructor(private fb: FormBuilder, private service: HttpmethodsService, private toastr: ToastrService) { }

  displayedColumns: string[] = [ 'Sr.No.','name', 'whatsappNo','productImage','type','mrp','status','Action'];
  dataSource = new MatTableDataSource<bannerMaster>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild('epltable', { static: false }) epltable?: ElementRef;

  ngOnInit(): void {
    this.ProductMasterForm = this.fb.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      whatsappNo: ['' , Validators.required],
      productImage: ['', Validators.required],
      status:['', Validators.required],
      type:['', Validators.required],
      mrp:['', Validators.required],
      seasonId:['', Validators.required],

    });
    this.getAllProductMaster();
    this.getActiveseasonList()
  }
  submit(){
    console.log(this.ProductMasterModel);
    this.service.postRequest(createProductMaster, this.ProductMasterModel).subscribe(
      (res) => {
        console.log(res);
        this.issubmit = true;
        this.isupdate = false;
        this.ProductMasterForm.reset()
      })
  }

  update(){
    this.service
    .putRequest(updateProduct, this.ProductMasterModel)
    .subscribe((res) => {
      console.log(res);
      this.toastr.success('Updated Successfully!');
      this.issubmit = true;
      this.isupdate = false;
    });
  }
  handleFileInput(e: FileList | any) {
    this.filetoupload = e.target.files.item(0);
    this.service
      .fileUpload(fileupload, this.filetoupload)
      .subscribe((data: any) => {
        console.log(data);
        if (data.status == true) {
          this.ProductMasterModel.productImage = data.path;
        } else {
          this.toastr.error(data.path, 'error!', { timeOut: 500 });
        }
      });
  }

  edit(item: any) {
    // console.log(item);
    this.ProductMasterModel = item;
    this.issubmit = false;
    this.isupdate = true;
  }

  getAllProductMaster() {
    this.service.getwithHeaderRequest(getAllProductMaster).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log(data)
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    })
  }


  getActiveseasonList(){
    this.service.getRequest(getActiveSeason).subscribe((data:any)=>{
      this.foods=data;
      // sessionStorage.setItem('id',data.seasonId)
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
