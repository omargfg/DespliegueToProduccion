import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfases/Capital';
import { CountryService } from '../../services/country.service';



@Component({
  selector: 'countries-byCountryPage',
  templateUrl: './byCountryPage.component.html',



})
export class ByCountryPageComponent implements OnInit {



public lis_countries:ICountry  []=[];

constructor(private countriesService:CountryService ){}




 searchCountry(param:string){
this.countriesService.searchByCountry(param).subscribe(
paies=>{
 this.lis_countries=paies;
});

 }

  ngOnInit() {
  }

}
