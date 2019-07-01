import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonViewerComponent } from './person-viewer.component';

describe('PersonViewerComponent', () => {
  let component: PersonViewerComponent;
  let fixture: ComponentFixture<PersonViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
