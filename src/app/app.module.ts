import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasempleadoComponent } from './caracteristicasempleado/caracteristicasempleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProyectoscomponentComponent } from './proyectoscomponent/proyectoscomponent.component';
import { QuienescomponentComponent } from './quienescomponent/quienescomponent.component';
import { ContactocomponentComponent } from './contactocomponent/contactocomponent.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorpersonComponent } from './errorperson/errorperson.component';

const appRoutes:Routes=[

  {path:'',component:HomecomponentComponent},
  {path:'proyectos',component:ProyectoscomponentComponent},
  {path:'quienes',component:QuienescomponentComponent},
  {path:'contacto',component:ContactocomponentComponent},
  {path:'actualiza/:id',component:ActualizaComponentComponent},
  {path:'**',component:ErrorpersonComponent}




];

@NgModule({
  declarations: [
    AppComponent,
    
    EmpleadoHijoComponent,
    CaracteristicasempleadoComponent,
    HomecomponentComponent,
    ProyectoscomponentComponent,
    QuienescomponentComponent,
    ContactocomponentComponent,
    ContactocomponentComponent,
    HomecomponentComponent,
    QuienescomponentComponent,
    ProyectoscomponentComponent,
    ContactocomponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService,EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
