export class Persona {
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;

    constructor(nombre: string, apellido: string, correo: string, contrasena: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}
