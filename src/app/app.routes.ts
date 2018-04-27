import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopageComponent } from './shared/nopage/nopage.component';
import { LoginComponent } from './login/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'

    },

    {path: '**', component: NopageComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
