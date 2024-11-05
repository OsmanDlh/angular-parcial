/* import { Component } from '@angular/core';

@Component({
  selector: 'app-list-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})
export class ListUsuariosComponent {

} */
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';  
import { ObtenerUsuariosResponse } from '../../../interfaces/admin.interface';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})
export class ListUsuariosComponent implements OnInit {
  usuarios: ObtenerUsuariosResponse[] = [];
  router: any;
 

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  //* Método para obtener usuarios
  getUsuarios(): void {
    this.adminService.getUsers().subscribe((response: any) => {
      this.usuarios = response.resultado;
    }, error => {
      console.error('Error al obtener usuarios:', error);
    });
  }

  // irACrearUsuario(): void {
  //   this.router.navigate(['/user/crear']);
  // }

  actualizarUsuario(id: string): void {
    this.router.navigate(['/editar-usuario', id]);
  }


  //* Método para eliminar un usuario
  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.adminService.deleteUser(id).subscribe({
        next: response => {
          console.log('Usuario eliminado:', response);
          this.getUsuarios(); // Actualiza la lista de usuarios después de la eliminación
        },
        error: error => console.error('Error al eliminar usuario:', error),
      });
    }
  }
}

