import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { conatctMaster, loginMaster } from 'src/app/shared/allModel';
import { getAllContact } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';

@Component({
  selector: 'app-contactusmaster',
  templateUrl: './contactusmaster.component.html',
  styleUrls: ['./contactusmaster.component.css']
})
export class ContactusmasterComponent implements OnInit {
  ContactMasterModel = new conatctMaster()

  constructor(private fb: FormBuilder, private service: HttpmethodsService, private toastr: ToastrService) { }

  displayedColumns: string[] = ['Sr.No', 'mobileNo', 'contactEmail','contactAddress','status'];
  dataSource = new MatTableDataSource<conatctMaster>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild('epltable', { static: false }) epltable?: ElementRef;

  ngOnInit(): void {
    this. getAllContactUs()
  }
  getAllContactUs() {
    this.service.getwithHeaderRequest(getAllContact).subscribe((data: any) => {
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
