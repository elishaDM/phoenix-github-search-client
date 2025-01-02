import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { materialModules } from './material.imports';
import { CommonModule } from '@angular/common';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RepositorySearchComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'github-search-client';
}
