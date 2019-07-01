import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Persona } from '../Clases/persona';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public $perfilSubject = new Subject<any>();
  public $perfilSubjectEdit = new Subject<any>();

  raiz: string = "http://127.0.0.1:3333/";

  constructor(private _http: HttpClient) { }

  getPersonas() {
    return this._http.get(this.raiz + 'usuarios');
  }

  postPersona(persona: Persona) {
    return this._http.post(this.raiz + 'guardar', persona);
  }

  public agregarPersona(nuevaPersona: any) {
    this.$perfilSubject.next(nuevaPersona);
  }

  deletePersona(id: number) {
    return this._http.delete(this.raiz + 'borrar', {params: new HttpParams().set("id", id.toString())});
  }

  updatePersona(id: number, persona: Persona) {
    //mando id y el body del post
    return this._http.put(this.raiz + 'actualizar/' + id, persona);
  }

  reemplazarPersona(personaEditada: any) {
    this.$perfilSubjectEdit.next(personaEditada);
  }

  iniciarSesion(correo: string, password: string) {
    var datos = { correo: correo,
                  password: password
                }
    
    return this._http.post(this.raiz + 'login', datos, {responseType: 'text'});

  }

  crearUser(correo: string, password: string, nombre: string, apellido: string) {
    var datos = { correo: correo,
                  password: password,
                  nombre: nombre,
                  apellido: apellido
                }
    
    return this._http.post<any>(this.raiz + 'register', datos);

  }
  
}
