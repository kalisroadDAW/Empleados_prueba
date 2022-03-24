import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  avisa_del_registro(mensaje:string){
    alert("usuario registrado");
  }
}
