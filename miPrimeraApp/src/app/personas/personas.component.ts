import { Component } from "@angular/core";

/* AHORA DEFINO LA CLASE , le asignamos la palabra reservada export para que pueda ser usado en otros componentes */

/* a continuacion le agrego el decorador y se hace el auto import */

/* ahora le agrego los atributos */
/* ahora procedp a agregarlo en app.module.ts en declarations de ng module y su respectivo import en ese app.module.ts */


@Component({    
    selector: "tutuca",
    templateUrl: "./personas.component.html",    
    styleUrls: ['./personas.component.css'] 
})
export class PersonaComponent {
    nombre: string = "tutuca";
    apellido: string = "cuquito";
    private edad: number = 2;
    /* este es un metodo publico porque el atributo edad esta establecido en privado */
    getEdad():number{
         return this.edad;
    } 
}