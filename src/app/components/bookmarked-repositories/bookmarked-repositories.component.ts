import { Component, inject, OnInit } from '@angular/core';
import { RepositoryItemComponent } from '../repository-item/repository-item.component';
import { CommonModule } from '@angular/common';
import { materialModules } from '@app/material.imports';
import { GitHubService } from '@app/services/github.service';

@Component({
  selector: 'app-bookmarked-repositories',
  imports: [CommonModule, ...materialModules, RepositoryItemComponent],
  templateUrl: './bookmarked-repositories.component.html',
  styleUrl: './bookmarked-repositories.component.scss'
})
export class BookmarkedRepositoriesComponent implements OnInit{
  #gitHubService = inject(GitHubService);
  repositories: any[] = [];

  ngOnInit(): void {
    this.#gitHubService.fetchBookmarkedRepositories();
    this.repositories = this.#gitHubService.bookmarkedRepositories();
  }
  

}
