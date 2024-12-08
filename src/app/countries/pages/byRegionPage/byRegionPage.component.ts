import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfases/Capital';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-byRegionPage',
  templateUrl: './byRegionPage.component.html',

})
export class ByRegionPageComponent implements OnInit {


public lis_countries:ICountry  []=[];

constructor(private countriesService:CountryService ){}




 searchRegion(param:string){
this.countriesService.searchByRegion(param).subscribe(
paies=>{
 this.lis_countries=paies;
});

 }



  ngOnInit() {
  }

}
