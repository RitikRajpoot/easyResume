import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { EditorComponent } from './components/editor/editor.component';
import { CustomizationModalComponent } from './components/editor/components/customization-modal/customization-modal.component';
import { ExportModalComponent } from './components/export-modal/export-modal.component';
import { DropdownComponent } from 'src/app/shared/components/dropdown/dropdown.component';
import { MyResumeComponent } from './components/editor/components/my-resume/my-resume.component';
import { SwitchComponent } from 'src/app/shared/components/switch/switch.component';


@NgModule({
  declarations: [
    EditorComponent,
    DropdownComponent,
    CustomizationModalComponent,
    ExportModalComponent,
    MyResumeComponent,
    SwitchComponent,
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class BuilderModule { }
