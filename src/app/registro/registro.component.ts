import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonaService } from '../Servicios/persona.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  form = new FormGroup({
    correo: new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    apellido: new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
    ]),
    nombre: new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
    ]),
    contrasena: new FormControl('',
    [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private _servicio: PersonaService) { }

  ngOnInit() {
  }

  crear() {
    var correo = this.form.value.correo;
    var pass = this.form.value.contrasena;
    var nombre = this.form.value.nombre;
    var apellido = this.form.value.apellido;

    this._servicio.crearUser(correo, pass, nombre, apellido).subscribe(res => alert(res.msj));

  }

}
