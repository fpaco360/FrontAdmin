import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.module';
import { PagesComponent } from './pages/pages.component';
import { SidebarService } from './services/shared/sidebar.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // PagesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES,
    PagesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule
  ],
  providers:
  [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
