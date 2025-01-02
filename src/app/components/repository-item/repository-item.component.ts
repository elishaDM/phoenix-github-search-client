import { CommonModule } from '@angular/common';
import { Component, effect, Input, OnInit, signal } from '@angular/core';
import { materialModules } from '@app/material.imports';
import { GitHubService } from '@app/services/github.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-repository-item',
  imports: [CommonModule, ...materialModules],
  templateUrl: './repository-item.component.html',
  styleUrl: './repository-item.component.scss'
})
export class RepositoryItemComponent implements OnInit{
  @Input() repository: any;
  isBookmarkedSignal = signal<boolean>(false);
  isBookmarked: boolean = false;

  constructor(private gitHubService: GitHubService){
    effect(() => {
      this.isBookmarked = this.isBookmarkedSignal();
      console.log('isBookmarked= ' + this.isBookmarked);
    });
  }
  ngOnInit(): void {
    this.isBookmarkedSignal.set(
    this.gitHubService.isRepositoryBookmarked(this.repository.id));
  }

  toggleBookmark(repo: any) {
    this.gitHubService.bookmarkRepository(repo.id).then((result: boolean) => {
      this.isBookmarkedSignal.set(result);
    }).catch(error => {
      console.error('Failed to toggle bookmark:', error);
    });
  }

}
