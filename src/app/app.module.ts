import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormCrearComponent } from './Componentes/form-crear/form-crear.component';
import { PersonViewerComponent } from './Componentes/person-viewer/person-viewer.component';
import { FormEditarComponent } from './Componentes/form-editar/form-editar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { AuthService } from './Servicios/auth.service';
import { RegistroComponent } from './registro/registro.component';
import { RegisterGuard } from './register.guard';


@NgModule({
  declarations: [
    AppComponent,
    FormCrearComponent,
    PersonViewerComponent,
    FormEditarComponent,
    LoginComponent,
    DashboardComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'home', 
      component:  LoginComponent,
      canActivate: [RegisterGuard]
    },
    { path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthService]
    },
    {
      path: 'register',
      component: RegistroComponent,
      canActivate: [RegisterGuard]
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ FormEditarComponent ]
})
export class AppModule { }
