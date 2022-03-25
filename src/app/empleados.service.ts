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

    encontrarEmpleado(indice:number){

        let empleado:Empleado=this.empleados[indice];

        return empleado;

    }

    actualizarEmpleado(indice:number,empleado:Empleado){

        let empleadoModificado=this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;

        empleadoModificado.apellidos=empleado.apellidos;

        empleadoModificado.cargo=empleado.cargo

        empleadoModificado.sueldo=empleado.sueldo;

        
    }

    eliminarEmpleado(indice:number,empleado:Empleado){

        this.empleados.splice(indice,1);

        
        

        /*empleado.nombre='';

        empleado.apellidos='';

        empleado.cargo='';

        empleado.sueldo=0;

        empleadoModificado.nombre=empleado.nombre;

        empleadoModificado.apellidos=empleado.apellidos;

        empleadoModificado.cargo=empleado.cargo

        empleadoModificado.sueldo=empleado.sueldo;

        
    */}
    
}