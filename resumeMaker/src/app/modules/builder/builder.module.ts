import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { CustomizationModalComponent } from './components/customization-modal/customization-modal.component';
import { ExportModalComponent } from './components/export-modal/export-modal.component';


@NgModule({
  declarations: [
    EditorComponent,
    CustomizationModalComponent,
    ExportModalComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
