import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})


export class EmpleadoHijoComponent implements OnInit {

  @Input() empleadodelista:Empleado;

  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

  arrayCaracteristica = [''];

  agregaCaracteristicas(nuevaCaracteristica: string) {
    this.arrayCaracteristica.push(nuevaCaracteristica);
  }
}

