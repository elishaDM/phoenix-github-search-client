import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [ CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  username: string = '';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['login']);
  }
  bookmarks(){
    this.router.navigate(['bookmarks']);
  }
  search(){
    this.router.navigate(['search']);
  }
}
