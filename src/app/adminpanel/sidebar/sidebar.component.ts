import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  dashboard: boolean = true;
  home:boolean =false;
  about:boolean=false;
  gallery:boolean=false;
  seasonwise:boolean=false;
  contactus:boolean=false;
  showFiller = false;
  Role!: string
  constructor(
    // public userService: HttpmethodsService,

  ) { }

  ngOnInit(): void {

  }


  activePageChange(text: string) {
    if (text == 'dashboard') {
      this.dashboard = true;
      this.home = false;
      this.about=false;
      this.gallery=false;
      this.seasonwise=false;
      this.contactus=false;
    } else if (text == 'home'){
      this.dashboard = false;
      this.home = true;
      this.about=false;
      this.gallery=false;
      this.seasonwise=false;
      this.contactus=false;
    }else if(text == 'about'){
      this.dashboard = false;
      this.home = false;
      this.about=true;
      this.gallery=false;
      this.seasonwise=false;
      this.contactus=false;
    }else if(text == 'gallery'){
      this.dashboard = false;
      this.home = false;
      this.about=false;
      this.gallery=true;
      this.seasonwise=false;
      this.contactus=false;
    }else if(text == 'seasonwise'){
      this.dashboard = false;
      this.home = false;
      this.about=false;
      this.gallery=false;
      this.seasonwise=true;
      this.contactus=false;
    }else if(text == 'contactus'){
      this.dashboard = false;
      this.home = false;
      this.about=false;
      this.gallery=false;
      this.seasonwise=false;
      this.contactus=true;
    }
  }
}