import { Routes } from '@angular/router';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { LoginComponent } from './components/login/login.component';
import { BookmarkedRepositoriesComponent } from './components/bookmarked-repositories/bookmarked-repositories.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'search', component: RepositorySearchComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'bookmarks', component: BookmarkedRepositoriesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

