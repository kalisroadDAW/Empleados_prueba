import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasempleadoComponent } from './caracteristicasempleado/caracteristicasempleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    
    EmpleadoHijoComponent,
    CaracteristicasempleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService,EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
