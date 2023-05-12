import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { bannerMaster, seasonwiseMaster } from 'src/app/shared/allModel';
import { createSeasonWise, getAllSeasonWise, updateSeasonwise } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';

@Component({
  selector: 'app-seasonwisemaster',
  templateUrl: './seasonwisemaster.component.html',
  styleUrls: ['./seasonwisemaster.component.css']
})
export class SeasonwisemasterComponent implements OnInit {
  issubmit: boolean = true
  isupdate: boolean = false

  SeasonWiseMasterForm!: FormGroup;
  SeasonMasterModel = new seasonwiseMaster()

  constructor(private fb: FormBuilder, private service: HttpmethodsService, private toastr: ToastrService) { }

  displayedColumns: string[] = [ 'Sr.No.','seasonName','status','Action'];
  dataSource = new MatTableDataSource<seasonwiseMaster>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild('epltable', { static: false }) epltable?: ElementRef;

  ngOnInit(): void {
    this.SeasonWiseMasterForm = this.fb.group({
      seasonName: ['',Validators.required],
      status: ['',Validators.required],
    });
    this.getAllSeasonWise()
  }

  submit(){
    console.log(this.SeasonMasterModel);
    this.service.postRequest(createSeasonWise, this.SeasonMasterModel).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('save Successfully...!', 'Success');
        this.issubmit = true;
        this.isupdate = false;
        this.SeasonWiseMasterForm.reset()
      })
  }

  update(){
    this.service
      .putRequest(updateSeasonwise, this.SeasonMasterModel)
      .subscribe((res) => {
        console.log(res);
        this.toastr.success('update Successfully!');
        this.issubmit = true;
        this.isupdate = false;
      });
  }
  edit(item: any) {
    // console.log(item);
    this.SeasonMasterModel = item;
    this.issubmit = false;
    this.isupdate = true;
  }
 
  getAllSeasonWise() {
    this.service.getwithHeaderRequest(getAllSeasonWise).subscribe((data: any) => {
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
