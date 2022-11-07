import { Component } from "@angular/core";

/* AHORA DEFINO LA CLASE , le asignamos la palabra reservada export para que pueda ser usado en otros componentes */

/* a continuacion le agrego el decorador y se hace el auto import */

@Component({
    /* ahora le agrego los atributos */
    selector: "tutuca",
    templateUrl: "./personas.component.html",
    /* ahora procedp a agregarlo en app.module.ts en declarations de ng module y su respectivo import en ese app.module.ts */
})
export class PersonaComponent {

}