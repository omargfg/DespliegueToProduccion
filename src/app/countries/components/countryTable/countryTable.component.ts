import { Component,Input, OnInit } from '@angular/core';
import { ICountry } from '../../interfases/Capital';

@Component({
  selector: 'countryTable',
  templateUrl: './countryTable.component.html',
  styles: [`img{
    width:25px
  }`]
})
export class CountryTableComponent implements OnInit {


@Input()
public countries:ICountry[]=[];

  constructor() { }

  ngOnInit() {
  }

}
