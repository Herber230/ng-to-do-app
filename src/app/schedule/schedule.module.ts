import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ControlsModule } from '../controls/controls.module';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    TaskEditorComponent,
  ],
  imports: [
    CommonModule,
    ControlsModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ScheduleModule { }
