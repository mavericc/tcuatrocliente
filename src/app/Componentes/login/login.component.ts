import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form = new FormGroup({
    correo: new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      Validators.email
    ]),
    contrasena: new FormControl('',
    [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private _servicio: PersonaService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    var correo = this.form.value.correo;
    var pass = this.form.value.contrasena;

    this._servicio.iniciarSesion(correo, pass).subscribe(token =>{
      localStorage.setItem('token', token);
      this.router.navigate(['dashboard']);
    } );

  }

}
