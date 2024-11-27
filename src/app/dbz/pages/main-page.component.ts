import { Component, OnInit } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

//aki en el main-page vamos a usar la inyeccion de dependencia declarando en el constructor de nuestro main-page
// la variable en este caso 'ServdbzService' y diciendo q es de tipo'DbzService' esto garantiza q sea visible en todo nuestro proyecto.
constructor(public ServdbzService:DbzService){};

}
