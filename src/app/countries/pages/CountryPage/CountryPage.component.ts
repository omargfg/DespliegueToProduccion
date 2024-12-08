import { ContriesRoutingModule } from './../../countries-routing.modules';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { ICountry } from '../../interfases/Capital';

@Component({
  selector: 'countries-CountryPage',
  templateUrl: './CountryPage.component.html',

})
export class CountryPageComponent implements OnInit {

// lo que queremos hacer en este ejercicio es preparar la opcion "ver mas" d cada elemento de la busqueda, cuando alguien la active la idea es que venga a esta pagina o componente
//   q es donde se van a mostrar caracteristicas de ese elemento de la tabla o la lista, por tanto necesitamos cacturar el ID del pais de dicho elemento en la lista para filtrar esa informacion..
//pero si por alguna razon no existe vamos a jugar con nuestro 'ContriesRoutingModule' y redireccionarlo a otro lugar

public country?:ICountry;




  //1-vamos a declarar una variable 'activatedRoute:ActivatedRoute' q va a tener un objeto de angular con todas las propiedades y metodos de una ruta activa
  constructor(
    private activatedRoute:ActivatedRoute,
    private contriesService:CountryService,
    private router:Router,
  ) { }

  ngOnInit() {


      // this.activatedRoute.params.subscribe(({params})=>{
      //                                   console.log({params: params['id']})//este es un ejemplode como obtener las propiedades acuales del observable'params', el ID en este caso para mostrarlo en un consol.log
      //                                     })
                                          // esta es otra forma desestructurando directamente la propiedad 'id' del objeto 'params '
   this.activatedRoute.params
   .pipe(
      switchMap(({id})=>this.contriesService.searchCountryByAlphaCode(id))
   )
   .subscribe((country)=>{
    if(!country){
      return this.router.navigateByUrl('');
    }

    return this.country=country;
  }
   );


  }

}
