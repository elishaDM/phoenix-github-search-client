import { Routes } from '@angular/router';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'search', component: RepositorySearchComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

