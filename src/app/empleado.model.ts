export class Empleado {
    pop() {
        throw new Error("Method not implemented.");
    }
    splice(arg0: string) {
        throw new Error("Method not implemented.");
    }

    nombre:string="";
    apellidos:string="";
    cargo:string="";
    sueldo:number=0;

    


    
  
    
  
    constructor(nombre: string, apellidos:string,cargo:string,sueldo:number) {
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.cargo=cargo;
        this.sueldo=sueldo;
     
     }

    }