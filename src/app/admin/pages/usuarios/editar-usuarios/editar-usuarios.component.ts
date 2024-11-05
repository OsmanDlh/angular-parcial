import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { ObtenerUsuariosResponse } from '../../../interfaces/admin.interface'; // Asegúrate de que la ruta es correcta
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-editar-usuarios',
  imports: [ReactiveFormsModule, NgIf],
  standalone: true,
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  usuarioForm: FormGroup;
  usuarioId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) {
    this.usuarioForm = this.fb.group({
      nomusuario: ['', Validators.required],
      contrasena: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      documento: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      estado: [true]  // Campo para el estado del usuario
    });
    this.usuarioId = 0;
  }

  ngOnInit(): void {
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!; // Obtener ID desde la URL
    this.cargarUsuario(); // Cargar datos del usuario
  }

  cargarUsuario(): void {
    this.adminService.getUserById(this.usuarioId).subscribe(
      (data: ObtenerUsuariosResponse) => {
        this.usuarioForm.patchValue({
          nomusuario: data.nomusuario,
          contrasena: data.contrasena,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          documento: data.documento,
          fechaNacimiento: data.fechaNacimiento,
          telefono: data.telefono,
          estado: data.estado
        });
      },
      (error) => {
        console.error('Error cargando el usuario:', error);
      }
    );
  }

  actualizarUsuario(): void {
    if (this.usuarioForm.valid) {
      // Construimos el objeto tal cual lo necesitas
      const usuarioData = {
        nomusuario: this.usuarioForm.value.nomusuario,
        contrasena: this.usuarioForm.value.contrasena,
        nombre: this.usuarioForm.value.nombre,
        apellido: this.usuarioForm.value.apellido,
        correo: this.usuarioForm.value.correo,
        documento: this.usuarioForm.value.documento,
        fechaNacimiento: this.usuarioForm.value.fechaNacimiento,
        telefono: this.usuarioForm.value.telefono,
        idrol: 1, // Establecer el rol por defecto si es necesario
        estado: this.usuarioForm.value.estado
      };

      console.log('Datos a enviar:', usuarioData); // Verifica que esto esté correcto

      this.adminService.updateUser(this.usuarioId, usuarioData).subscribe(
        () => {
          alert('Usuario actualizado exitosamente');
          this.router.navigate(['/admin/users/lista']);
        },
        (error) => {
          console.error('Error actualizando el usuario:', error);
          alert(`Error al actualizar el usuario: ${error.error?.detail || error.message}`);
        }
      );
    } else {
      console.error('Formulario inválido:', this.usuarioForm); // Verifica el estado del formulario
    }
  }
}
