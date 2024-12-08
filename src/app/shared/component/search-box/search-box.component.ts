import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'searchbox',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent  {

@Input()
public DinamicPlaceHolder:string='';

@Output()
public Input_value: EventEmitter<String>= new EventEmitter<String>();



  public GetIbuscar_Value(value:String):void{
    if(value.length===0) return;
    this.Input_value.emit(value);

}
}
