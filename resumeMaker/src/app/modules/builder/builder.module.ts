import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { CustomizationModalComponent } from './components/customization-modal/customization-modal.component';
import { ExportModalComponent } from './components/export-modal/export-modal.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { MyResumeComponent } from './components/editor/components/my-resume/my-resume.component';


@NgModule({
  declarations: [
    EditorComponent,
    DropdownComponent,
    CustomizationModalComponent,
    ExportModalComponent,
    MyResumeComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
