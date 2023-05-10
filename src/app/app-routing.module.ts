import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./adminpanel/adminpanel.module').then(mod => mod.AdminpanelModule) },
  { path: '', loadChildren: ()=> import('./userpanel/userpanel.module').then(mod => mod.UserpanelModule)},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
