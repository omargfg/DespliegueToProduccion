import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable,catchError, map, of } from 'rxjs';
import {ICountry } from '../interfases/Capital';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
private apiUrl:string='https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }




public searchCapital(param:string):Observable<ICountry[]>{//funcion para establecer la coneccion con la API, y buscar capitales en este caso
    const url=`${this.apiUrl}/capital/${param}`;//definimos la url, en este caso'param' es el elemento que filtra lo q queremos buscar, el nombre de la capital en este caso
    return this.http.get<ICountry[]>(url).pipe( catchError(()=>of([])));


//aki retornamos lo que devolvio la API, hay que importar el modulo de angular 'HttpClient'para usar
//la propiedad 'http', lo estamos haciento con el metodo get 'http.get<ICountry[]>' y estamos diciendo el tipo d datoo el formato con que queremos recibir
//la informacion, en este caso un array dla interfase'ICountry[]' y le pasamos el parametro 'url' definido anteriormente
//despues para el tratamiento de errores estamos usando el metodo .pipe( catchError(()=>of([]))) hay que importar " import { Observable,catchError, of } from 'rxjs'"
//para que esta sintaxis funcione. aqui '()=>of([])' estamos diciendo que devuelva al observableun valor en este caso d un array vacio.

}

public searchByCountry(param:string):Observable<ICountry[]>{//funcion para establecer la coneccion con la APIy buscar x paises en este caso
    const url=`${this.apiUrl}/name/${param}`;
    return this.http.get<ICountry[]>(url).pipe( catchError(()=>of([])));

}
  public searchByRegion(param:string):Observable<ICountry[]>{//funcion para establecer la coneccion con la APIy buscar x region en este caso
    const url=`${this.apiUrl}/region/${param}`;
    return this.http.get<ICountry[]>(url).pipe( catchError(()=>of([])));

  }


  public searchCountryByAlphaCode(code:string):Observable<ICountry | null>{//funcion para establecer la coneccion con la APIy buscar paises segun un codigo o ID
    const url=`${this.apiUrl}/alpha/${code}`;
    return this.http.get<ICountry[]>(url)
    .pipe(
      map(contries=>contries.length>0 ? contries[0] : null),
      catchError(()=>of(null))

    );

}





}
