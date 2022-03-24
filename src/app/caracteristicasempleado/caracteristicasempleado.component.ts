import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-caracteristicasempleado',
  templateUrl: './caracteristicasempleado.component.html',
  styleUrls: ['./caracteristicasempleado.component.css']
})
export class CaracteristicasempleadoComponent implements OnInit {

  @Output() caracteristicasempleado = new EventEmitter<string>();

  

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value: string) {
    this.miServicio.avisa_del_registro(value)
    this.caracteristicasempleado.emit(value);

}}
