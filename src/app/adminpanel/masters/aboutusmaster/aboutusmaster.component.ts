import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { aboutMaster, bannerMaster } from 'src/app/shared/allModel';
import { createAboutMaster, fileupload, getAllAboutUs, updateAbout } from 'src/app/shared/allURL';
import { HttpmethodsService } from 'src/app/shared/httpmethods.service';

@Component({
  selector: 'app-aboutusmaster',
  templateUrl: './aboutusmaster.component.html',
  styleUrls: ['./aboutusmaster.component.css']
})
export class AboutusmasterComponent implements OnInit {
  issubmit: boolean = true
  isupdate: boolean = false
  AboutMasterForm!: FormGroup;
  AboutMasterModel = new aboutMaster()
  filetoupload: any;
  constructor(private fb: FormBuilder, private service: HttpmethodsService, private toastr: ToastrService) { }

  displayedColumns: string[] = [ 'Sr.No.','aboutUsHeading', 'aboutUsDescription','status','Action'];
  dataSource = new MatTableDataSource<aboutMaster>();
  @ViewChild(MatSort, { static: true }) sort?: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild('epltable', { static: false }) epltable?: ElementRef;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter Description here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',

    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  ngOnInit(): void {
    this.AboutMasterForm = this.fb.group({
      aboutUsDescription: ['',Validators.required],
      visionDescription: ['',Validators.required],
      missionDescription: ['' , Validators.required],
      image: ['', Validators.required],
      status:['', Validators.required],
      aboutUsHeading:['', Validators.required],
    });
    this.getAllAboutus()
  }

  submit(){
    console.log(this.AboutMasterModel);
    this.service.postRequest(createAboutMaster, this.AboutMasterModel).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('save Successfully...!', 'Success');
        this.issubmit = true;
        this.isupdate = false;
        this.AboutMasterForm.reset()
      })
  }

  update(){
    this.service.putRequest(updateAbout, this.AboutMasterModel).subscribe((res) => {
      console.log(res);
      this.toastr.success('update Successfully...!', 'Success');
      this.issubmit = true
      this.isupdate = false
    })
  }
  edit(item: any) {
    // console.log(item);
    this.AboutMasterModel = item;
    this.issubmit = false;
    this.isupdate = true;
  }

  getAllAboutus() {
    this.service.getwithHeaderRequest(getAllAboutUs).subscribe((data: any) => {
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
          this.AboutMasterModel.image = data.path;
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
