import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NopageComponent } from '../shared/nopage/nopage.component';
import { AjustesComponent } from './ajustes/ajustes.component';


const pagesRoutes: Routes = [
        {
        path: '',
        component: PagesComponent,
        children: [
                { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
                { path: 'ajustes', component: AjustesComponent, data: {titulo: 'Ajustes'} },
                { path: 'nopage', component: NopageComponent, data: {titulo: 'Not Found'} },
                {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]},
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
