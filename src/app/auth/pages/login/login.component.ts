import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Corrige el nombre del servicio a AuthService
import { IUser, Response } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private AuthService: AuthService) {
    this.loginForm = this.fb.group({
      nomusuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      
      const { nomusuario, contrasena } = this.loginForm.value;
      console.log(nomusuario, contrasena);
      this.AuthService.login(nomusuario, contrasena).subscribe(
        (user: Response) => {
          console.log('Inicio de sesión exitoso', user);
          this.router.navigate(['/admin/users/lista']); 
        },
        (err: any) => {
          console.error('Error al iniciar sesión', err);
        }
      );
    }
  }
}
