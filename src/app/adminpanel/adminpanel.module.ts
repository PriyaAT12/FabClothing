import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpanelRoutingModule } from './adminpanel-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminpanelRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule,
    
    
  
  ]
})
export class AdminpanelModule { }
