import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { APP_ROUTES } from '../app.routes';
import { PAGES_ROUTES } from './pages.routes';
import { RouterModule } from '@angular/router';
import { AjustesComponent } from './ajustes/ajustes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    PagesComponent,
    AjustesComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class PagesModule { }
