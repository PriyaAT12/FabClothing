import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpanelRoutingModule } from './userpanel-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SeasonwiseComponent } from './seasonwise/seasonwise.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    GalleryComponent,
    SeasonwiseComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserpanelRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    CarouselModule 
  
  ]
})
export class UserpanelModule { }
