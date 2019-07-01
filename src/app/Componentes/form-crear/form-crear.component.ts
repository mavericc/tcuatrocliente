import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/Clases/persona';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'form-crear',
  templateUrl: './form-crear.component.html',
  styleUrls: ['./form-crear.component.css']
})
export class FormCrearComponent implements OnInit {

  nvaPersona: Observable<Object>;

  form = new FormGroup({
    nombre: new FormControl('',
                            [
                              Validators.required, 
                              Validators.minLength(2),
                              Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+')
                            ]),
    apellido: new FormControl('',
    [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+')
    ]),
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
    ]),
  });

  constructor(private _service: PersonaService) { }

  ngOnInit() {

  }

  savePersona() {
    const nvaPersona = new Persona(
      this.form.value.nombre,
      this.form.value.apellido,
      this.form.value.correo,
      this.form.value.contrasena,
    )

    this.nvaPersona = this._service.postPersona(nvaPersona);

    this.nvaPersona.subscribe(data => {
      this._service.agregarPersona(data);
    })

  }

}
