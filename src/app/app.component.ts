import { Component } from '@angular/core';
import { Empleado } from './empleado.model'
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario de registro';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    this.empleados=this.empleadosService.empleados

  }

  empleados:Empleado[]=[];


  agregarEmpleado(){

    let miempleado=new Empleado(this.cuadroNombre,this.cuadroApellidos,this.cuadroCargo,this.cuadroSueldo);

    this.miServicio.avisa_del_registro("Nombre del empleado" + miempleado.nombre);

    this.empleadosService.agregarEmpleadoServicio(miempleado);

    

    
}


  cuadroNombre:string="";
  cuadroApellidos:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;

  
}  ;
