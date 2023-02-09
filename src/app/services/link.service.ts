import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Link } from '../models/link.model';
import { checkAuthHeader } from '../interceptors/token.interceptor';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}
  getLinks() {
    return this.http.get<Link[]>(`${this.apiUrl}links`, {
      context: checkAuthHeader(),
    });
  }
}
