import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  showFiller = false;
  Role!: string
  constructor(
    // public userService: HttpmethodsService,

  ) { }

  ngOnInit(): void {
    this.Role = String(localStorage.getItem("roles"))
  }


}