import { Component } from '@angular/core';
import { materialModules } from '@app/material.imports';
import { GitHubService } from '@app/services/github.service';
import { RepositoryItemComponent } from "../repository-item/repository-item.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repository-search',
  imports: [CommonModule, FormsModule, ...materialModules, RepositoryItemComponent],
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.scss']
})
export class RepositorySearchComponent {
  searchQuery: string = '';
  repositories: any[] = [];

  constructor(private gitHubService: GitHubService) {}

  search(): void {
    if (this.searchQuery.trim()) {
      this.gitHubService.searchRepositories(this.searchQuery).subscribe((data) => {
        this.repositories = data.items;
      });
    }
  }
}
