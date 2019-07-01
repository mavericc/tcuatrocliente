import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/Clases/persona';
import { Observable } from 'rxjs';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-form-editar',
  templateUrl: './form-editar.component.html',
  styleUrls: ['./form-editar.component.css']
})
export class FormEditarComponent implements OnInit {
  @Input() public persona;

  personaEditada: Observable<Object>;

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
    console.log(this.persona);
  }

  updatePersona() {
    const editada = new Persona(
      this.form.value.nombre,
      this.form.value.apellido,
      this.form.value.correo,
      this.form.value.contrasena,
    )

    this.personaEditada = this._service.updatePersona(this.persona.id, editada);

    this.personaEditada.subscribe(data => {
      this._service.reemplazarPersona(data);
    })
  }

}
