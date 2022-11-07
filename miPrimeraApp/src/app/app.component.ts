import { Component } from '@angular/core';


/* aqui la clase appcomponent tiene un decorador de la cual hago uso */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titular = 'soy una exportacion de la clase AppComponent';
  saludo = "saludo desde angular(segunda variable en AppComponent";
}
