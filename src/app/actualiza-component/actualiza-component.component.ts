import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  empleados: Empleado[];

  constructor(private router:Router,private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  volverHome(){

    this.router.navigate([''])

  }

  agregarEmpleado(){

    let miempleado=new Empleado(this.cuadroNombre,this.cuadroApellidos,this.cuadroCargo,this.cuadroSueldo);

    this.miServicio.avisa_del_registro("Nombre del empleado" + miempleado.nombre);

    this.empleadosService.agregarEmpleadoServicio(miempleado);

    this.router.navigate([''])

    

    
}


  cuadroNombre:string="";
  cuadroApellidos:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;

  
}  
