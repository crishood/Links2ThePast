import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private tokenService: TokenService, private router: Router) {}
  public logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }
}
