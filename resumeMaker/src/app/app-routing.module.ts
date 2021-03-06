import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m =>
    m.HomeModule)},
  { path: 'builder', loadChildren: () => import('./modules/builder/builder.module').then(m =>
    m.BuilderModule )},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
