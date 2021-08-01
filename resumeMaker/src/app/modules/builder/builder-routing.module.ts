import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResumeComponent } from './components/editor/components/my-resume/my-resume.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  {path: '', component: EditorComponent, children: [
    {path: '', component: MyResumeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
