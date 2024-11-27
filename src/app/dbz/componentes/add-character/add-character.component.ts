import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent  {

//creo un caracter temporal para ponerle los valores de los input y luego agregarlo a mi lista d caracteres
  public character:character ={ name:'',power:0}



//Esta es la sintaxis para crear una propiedad q exporta un atributo a un componente padre 'EventEmitter<objeto a exportar>=new EventEmitter()'
//basicamente el objeto de angular'EventEmitter'y el decorador' @Output()'juntos se encargan d exportar una propiedad,
// en este caso 'public onNewCharacter' q va a ser un objeto d tipo '<character>'.

  @Output()
  public onNewCharacter:EventEmitter<character>=new EventEmitter();
//---------------------------------------------

  public emitCharacter():void{


  if (this.character.name.length===0||this.character.power===0) return;//valido q los valores no vengan vacios

       this.onNewCharacter.emit(this.character);//si todo esta ok,a la propiedad 'onNewCharacter' q voy a emitir le asigno mi objeto 'character'

  this.character={ name:'',power:0};//limpio los input
}

  }


