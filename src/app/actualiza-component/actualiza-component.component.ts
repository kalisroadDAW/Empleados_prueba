import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router:Router,private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellidos=empleado.apellidos;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSueldo=empleado.sueldo;


  }

  volverHome(){

    this.router.navigate([''])

  }

  actualizaEmpleado(){

    let miempleado=new Empleado(this.cuadroNombre,this.cuadroApellidos,this.cuadroCargo,this.cuadroSueldo);

    this.miServicio.avisa_del_registro("Nombre del empleado" + miempleado.nombre);

    this.empleadosService.actualizarEmpleado(this.indice,miempleado);

    

    this.router.navigate([''])

    

    
}

eliminaEmpleado(){

  let miempleado=new Empleado(this.cuadroNombre,this.cuadroApellidos,this.cuadroCargo,this.cuadroSueldo);

  this.miServicio.avisa_del_registro("Usuario eliminado" + miempleado.nombre);

  this.empleadosService.eliminarEmpleado(this.indice,miempleado);

  

  this.router.navigate([''])

  

  
}


  cuadroNombre:string="";
  cuadroApellidos:string="";
  cuadroCargo:string="";
  cuadroSueldo:number=0;
  indice:number;

  
}  
