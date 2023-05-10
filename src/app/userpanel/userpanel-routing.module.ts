import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SeasonwiseComponent } from './seasonwise/seasonwise.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'seasonwise', component: SeasonwiseComponent},
  {path:'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpanelRoutingModule { }
