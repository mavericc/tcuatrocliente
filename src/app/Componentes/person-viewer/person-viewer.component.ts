import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { FormEditarComponent } from '../form-editar/form-editar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/Clases/persona';

@Component({
  selector: 'person-viewer',
  templateUrl: './person-viewer.component.html',
  styleUrls: ['./person-viewer.component.css']
})
export class PersonViewerComponent implements OnInit {

  personas: any;
  
  constructor(private _service: PersonaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getPersonas();

    this._service.$perfilSubject.subscribe(data => {
      this.personas.push(data);
    });

    this._service.$perfilSubjectEdit.subscribe(data => {
      var i = this.personas.indexOf(data.id)
      this.personas[i] = data;
    });
  }

  openModal(id: number) {

    const modalRef = this.modalService.open(FormEditarComponent);
    
    modalRef.componentInstance.persona = this.personas.find(p => p.id === id);
  }

  getPersonas() {

    var aber = this._service.getPersonas();

    aber.subscribe(data => {
      this.personas = data;
    });

  }

  deletePersona(id: number) {
    var borrar = this._service.deletePersona(id);

    borrar.subscribe(data => {
      this.personas = this.personas.filter(persona => persona.id !== id);
    })
  }

}