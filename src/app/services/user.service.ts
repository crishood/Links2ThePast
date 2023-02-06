import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, CreateUserDTO, LoginUserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}
  signUp(dto: CreateUserDTO) {
    return this.http.post(`${this.apiUrl}sign_up`, dto);
  }
  login(dto: LoginUserDTO) {
    return this.http.post(`${this.apiUrl}login`, dto);
  }
  get(id: string) {
    return this.http.get<User>(`${this.apiUrl}user/${id}`);
  }
}
