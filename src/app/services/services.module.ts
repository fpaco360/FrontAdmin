import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './shared/sidebar.service';
import { AjustesService } from './ajustes/ajustes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ],
  providers: [
    SidebarService,
    AjustesService
  ]
})
export class ServicesModule { }
