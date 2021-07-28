import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderModule } from './modules/builder/builder.module';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {path:'', component: HomeModule},
  {path:'builder', component: BuilderModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
