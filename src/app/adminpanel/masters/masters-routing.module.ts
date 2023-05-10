import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemasterComponent } from './homemaster/homemaster.component';
import { AboutusmasterComponent } from './aboutusmaster/aboutusmaster.component';
import { GallerymasterComponent } from './gallerymaster/gallerymaster.component';
import { SeasonwisemasterComponent } from './seasonwisemaster/seasonwisemaster.component';
import { ContactusmasterComponent } from './contactusmaster/contactusmaster.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'homemaster', component: HomemasterComponent},
  {path:'aboutusmaster', component: AboutusmasterComponent},
  {path:'gallerymaster', component: GallerymasterComponent},
  {path:'seasonwisemaster', component: SeasonwisemasterComponent},
  {path:'contactusmaster', component: ContactusmasterComponent},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
