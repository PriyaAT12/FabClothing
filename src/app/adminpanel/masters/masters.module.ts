import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { HomemasterComponent } from './homemaster/homemaster.component';
import { AboutusmasterComponent } from './aboutusmaster/aboutusmaster.component';
import { GallerymasterComponent } from './gallerymaster/gallerymaster.component';
import { SeasonwisemasterComponent } from './seasonwisemaster/seasonwisemaster.component';
import { ContactusmasterComponent } from './contactusmaster/contactusmaster.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    HomemasterComponent,
    AboutusmasterComponent,
    GallerymasterComponent,
    SeasonwisemasterComponent,
    ContactusmasterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule
  ]
})
export class MastersModule { }
