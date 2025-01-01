import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { materialModules } from '@app/material.imports';
import { GitHubService } from '@app/services/github.service';

@Component({
  selector: 'app-repository-item',
  imports: [CommonModule, ...materialModules],
  templateUrl: './repository-item.component.html',
  styleUrl: './repository-item.component.scss'
})
export class RepositoryItemComponent {
  @Input() repository: any;

  constructor(private gitHubService: GitHubService){}

  bookmark(repo: any): void {
    this.gitHubService.bookmarkRepository(repo).subscribe({
      next: () => alert('Repository bookmarked!'),
      error: (err) => console.error(err),
    });
  }
}
