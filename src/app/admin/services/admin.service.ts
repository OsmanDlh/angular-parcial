import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObtenerUsuariosResponse } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  getUserById(id: number): Observable<ObtenerUsuariosResponse> {
    return this.http.get<ObtenerUsuariosResponse>(`${this.apiUrl}/obtener_usuario/${id}`);
}
  private apiUrl = 'https://bicicleta-gps-backend-fastapi.onrender.com';

  constructor(private http: HttpClient) {}

  //* Función para obtener los usuarios
  getUsers(): Observable<ObtenerUsuariosResponse[]> {
    return this.http.get<ObtenerUsuariosResponse[]>(`${this.apiUrl}/obtener_Usuarios`);
  }

  //* Función para actualizar la información de un usuario
  // Método para actualizar el usuario
  updateUser(id: number, usuarioData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update_usuario/${id}`, usuarioData);
}

  //* Función para eliminar un usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete_usuario/${id}`);
  }

  createUser(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear_usuario`, usuario);
  }
  

}

