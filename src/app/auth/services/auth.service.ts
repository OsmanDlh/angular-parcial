import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, Response } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://bicicleta-gps-backend-fastapi.onrender.com'; // Cambia esta URL a la correcta


  constructor(private http: HttpClient) {}

  
  login(nomusuario: string, contrasena: string): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}/login_user`, {
      nomusuario,
      contrasena,
    });
  }
}

  