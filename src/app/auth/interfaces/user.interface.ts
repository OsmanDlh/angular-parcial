export interface IUser {
    id: number;                // Identificador único del usuario
    nomusuario: string;        // Nombre de usuario
    email?: string;           // Email del usuario (opcional)
    access_token: string;      // Token de acceso para autenticar futuras solicitudes
  }
  
export interface Response {
    access_token: string;          // Mensaje de respuesta
}