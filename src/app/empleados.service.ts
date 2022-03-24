import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService{

    constructor(private servicioVentana:ServicioEmpleadosService){

    }

    empleados:Empleado[]=[
        new Empleado("José","Ramón","Tareapeuta",7500),
        new Empleado("Mario","Porras","Coordinador",7500),
        new Empleado("Emilio","Sabin","Psicologo",7500),
        new Empleado("Raul","García","Director",7500),
      ];

    agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentana.avisa_del_registro("persona que se va a agregar" + "\n" + empleado.nombre);


        this.empleados.push(empleado);
    }
}