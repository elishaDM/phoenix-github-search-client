import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private apiUrl = environment.apiUrl;
  repositories= signal<any[]>([]);
  bookmarkedRepositories = signal<any[]>([]); // Store bookmarked repositories
  
  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}github/search`, { params: { query } }).pipe(
      tap((responce: any)=>{
        this.repositories.set(responce.items)
      })
    )
    ;
  }

  async bookmarkRepository(repositoryId: any): Promise<boolean> {
    try {
      const response = await firstValueFrom(
        this.http.post<boolean>(`${this.apiUrl}github/bookmark`,  `"${repositoryId}"`, {
          headers: { 'Content-Type': 'application/json' }
        })
      );
      return !!response;
    } catch (error) {
      console.error('bookmark failed:', error);
      return false;
    }
  }

  isRepositoryBookmarked(repositoryId: number){
    const bookmarkedRepositories = this.bookmarkedRepositories(); // Get the current repositories
    const match = bookmarkedRepositories.findIndex(repo => repo.id == repositoryId);
    return match != -1;
  }

  async fetchBookmarkedRepositories() {
    try {
      const response = await firstValueFrom(
        this.http.get<string[]>(`${this.apiUrl}github/bookmarks`)
      );
      const allRepositories = this.repositories(); // Get the current repositories
      const bookmarks = allRepositories.filter((repo) =>
        response.includes(repo.id)
        );
        this.bookmarkedRepositories.set(bookmarks); // Set only the bookmarked repositories
    }
    catch (error) {
      console.error('get bookmarked failed:', error);
    }
    
      /* .pipe(
      tap((bookmarkedIds: string[]) => {
        const allRepositories = this.repositories(); // Get the current repositories
        const bookmarks = allRepositories.filter((repo) =>
          bookmarkedIds.includes(repo.id)
        );
        this.bookmarkedRepositories.set(bookmarks); // Set only the bookmarked repositories
      })
    ).subscribe(); */
  }
}