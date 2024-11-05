import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { AuthLayouthComponent } from './auth/layout/auth-layout/auth-layout.component';
import { EditarUsuariosComponent } from './admin/pages/usuarios/editar-usuarios/editar-usuarios.component';
import { CrearUsuariosComponent } from './admin/pages/usuarios/crear-usuarios/crear-usuarios.component';
import { ListUsuariosComponent } from './admin/pages/usuarios/list-usuarios/list-usuarios.component';


export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayouthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth/login', // Redirige a la ruta de login por defecto
    pathMatch: 'full', // Asegúrate de que la ruta coincida completamente
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'users', // Ruta para crear un nuevo usuario
        children: [
          {
            path: 'lista',
            component: ListUsuariosComponent,
          },
          {
            path: 'crear',
            component: CrearUsuariosComponent,
          },
         
          {
            path: 'editar/:id',
            component: EditarUsuariosComponent,
          },
        ],
      },
      
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
