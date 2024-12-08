import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ICountry } from '../../interfases/Capital';




@Component({
  selector: 'countries-byCapitalPage',
  templateUrl: './byCapitalPage.component.html',






})
export class ByCapitalPageComponent  {




public lis_countries:ICountry  []=[];

constructor(private countriesService:CountryService ){}




 searchByCapital(param:string){
this.countriesService.searchCapital(param).subscribe(
paies=>{
 this.lis_countries=paies;
});

 }
}
