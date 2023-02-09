import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, CreateUserDTO, LoginUserDTO } from '../models/user.model';
import { Auth } from '../models/auth.model';
import { tap, switchMap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { checkAuthHeader } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.API_URL;
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  signUp(dto: CreateUserDTO) {
    return this.http
      .post(`${this.apiUrl}sign_up`, dto)
      .pipe(
        tap(() =>
          this.tokenService.saveToken('92a1d7d6-a0fb-11ed-a8fc-0242ac120002')
        )
      );
  }
  login(dto: LoginUserDTO) {
    return this.http.post<Auth>(`${this.apiUrl}login`, dto).pipe(
      tap((response) => this.tokenService.saveToken(response.token)),
      switchMap(() => this.getUser('vskyrlu2qp'))
    );
  }
  getUser(id: string) {
    return this.http.get<User>(`${this.apiUrl}user/${id}`, {
      context: checkAuthHeader(),
    });
  }
}
