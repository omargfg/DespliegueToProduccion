
import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';
//aki importo la libreria externa 'uuid' q nos sirve para generar IDs a nuestros objetos
//para añadir esta libreria a angular ejecuto en nuestra consola los siguientes comandos: 'npm i uuid' y luego 'npm i --save-dev @types/uuid'
import{v4 as uuid }from 'uuid';

//console.log(uuid());
//Decorador encargado de la inyeccion de dependencia
//Basicamente lo que hace es q este servicio sea accesible en toda la aplicacion mediante la inyeccion de dependencia
@Injectable({providedIn: 'root'})
export class DbzService {


public characters: character[]=[ {//este ajemplo hace la funcion de contener lo que deberia venir de un formulario, por eso esta en el 'main page component'
  id:uuid(),
  name:'krilin',
  power:1000
},
{
  id:uuid(),
  name:'Goku',
  power:9500

}
,
{
  id:uuid(),
  name:'Vegueta',
  power:5000

} ];//fin del arreglo d characters

public addCaracter(character:character):void{
//aki estamos declarando la variable'newCharacter'd tipo'character' y la estamos inicializando d
//la siguiente manera' id:uuid(),...character' q kiere decir q va a recibir un atributo nuevo, en este caso'id:uuid()'
//mas todo lo que tenia el tipo d dato character anteriormente q se pone asi'...character'.

const newCharacter:character={  ...character,id:uuid()};

//esta declaracion d abajo es lo mismo que la linea anterior pero de la manera convencional
//        const newCharacter2:character={
  //      id:uuid(),
 //       name:character.name,
//        power:character.power
//          }

this.characters.push(newCharacter);

}

//---Funcion para remover un elemento de la lista
//el metodo splice() de un array elimina un elemento segun el index especificado,
//hay q decirle la cantidad a eliminar a partir q encuentre el index pq sino borra todo lo q este a partir del index hasta el final
//tb devuelve un array con los elementos borrados


deleteCharacterByindex(index:number):void{

  this.characters.splice(index,1)

  }

deleteCharacterById(id:string ):void{

this.characters=this.characters.filter(character=>character.id!==id);


}




}
