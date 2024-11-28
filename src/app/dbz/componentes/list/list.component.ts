import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class dbzListComponent  {
// el decorador @Input() me esta diciendo que mi componente'dbzListComponent'
// puede recibir una property del mundo exterior, en este caso la property'characterlist'
@Input()
public characterlist:character[]=[];

@Output()
public onDeletedIndex=new EventEmitter<number>();

@Output()
public onDeletedId=new EventEmitter<string>();

onDeleteCharacterByID(id?:string):void{

  if (!id) return;//aki ponemos esta validacion para si el ID no existe que nunca lo mande a llamar
  console.log(id);
  this.onDeletedId.emit(id);

}

//funcion q elimina segun el indice
onDeleteCharacterByIndex(index:number):void{

this.onDeletedIndex.emit(index);

}

}
