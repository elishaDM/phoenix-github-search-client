import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  usernameSignal = signal<string | null>(null);


  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}auth/login`, { username, password }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          // Save token to localStorage/sessionStorage
          sessionStorage.setItem('authToken', response.token);

          // Store the username in the signal
          this.usernameSignal.set(username);
        }
        else {
          this.usernameSignal.set(null);
        }
      })
    );
  }

  logout() {
    sessionStorage.removeItem('authToken');
    this.usernameSignal.set('');
  }

  isLoggedIn(): boolean {
    const res= !!sessionStorage.getItem('authToken');
    return res;
  }
}