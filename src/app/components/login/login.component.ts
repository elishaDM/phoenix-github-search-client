import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { materialModules } from '@app/material.imports';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ...materialModules],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        this.router.navigate(['search']);
      },
      error: (err) => {
        alert('Login failed. Please check your credentials.');
        console.error(err);
      },
    });
  }
}