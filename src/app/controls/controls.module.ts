import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { ButtonComponent } from './button/button.component';
import { BulletComponent } from './bullet/bullet.component';



@NgModule({
  declarations: [
    PanelComponent,
    ButtonComponent,
    BulletComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent,
    ButtonComponent,
    BulletComponent
  ]
})
export class ControlsModule { }
