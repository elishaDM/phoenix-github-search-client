import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { materialModules } from './material.imports';
import { CommonModule } from '@angular/common';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet, RepositorySearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'github-search-client';
}
