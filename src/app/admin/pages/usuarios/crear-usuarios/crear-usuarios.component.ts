import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router, RouterModule } from '@angular/router';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-usuarios',
  standalone: true,
  imports: [FormsModule, RouterModule],  // Agrega FormsModule y RouterModule
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent {
  usuario = {
    nomusuario: '',
    contrasena: '',
    nombre: '',
    apellido: '',
    correo: '',
    documento: '',
    fechaNacimiento: '',
    telefono: '',
    idrol: 1,  // Valor predeterminado de rol
    estado: true  
  };
  constructor(private adminService: AdminService, private router: Router) {}

  onSubmit(): void {
    this.adminService.createUser(this.usuario).subscribe({
      next: (response) => {
        console.log('Usuario creado:', response);
        this.router.navigate(['/admin/users/lista']); // Redirige a la lista de usuarios después de crear
      },
      error: (error) => console.error('Error al crear usuario:', error)
    });
  }
}
