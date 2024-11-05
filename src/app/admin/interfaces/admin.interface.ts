// Define la interfaz para un solo usuario
export interface ObtenerUsuariosResponse {
    id: number;
    nomusuario: string;
    contrasena: string;
    nombre: string;
    apellido: string;
    correo: string;
    documento: string;
    fechaNacimiento: string; // Puedes cambiar a Date si lo prefieres
    telefono: number;
    idrol: number;
    estado: boolean;
    fechaHora: string; // Puedes cambiar a Date si lo prefieres
}

// Define la interfaz para la respuesta de obtener usuarios
