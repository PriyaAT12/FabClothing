import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path: 'layout', component:LayoutComponent,  children: [
    { path: '', loadChildren: () => import('./masters/masters.module').then(mod => mod.MastersModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpanelRoutingModule { }
