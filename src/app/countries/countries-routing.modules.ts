import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { CountryPageComponent } from './pages/CountryPage/CountryPage.component';

const routes:Routes=[
  {
    path:'by-capital',
    component:ByCapitalPageComponent
  },
  {
    path:'by-country',
    component:ByCountryPageComponent
  },
  {
    path:'by-region',
    component:ByRegionPageComponent
  },
  {
    path:'by/:id',//aqui queremos pasar un argumento dinamico al Path
    component:CountryPageComponent
  },

 {
  path:'**',//este  path:'**' especifica q es indefinido y siempre se va a redirecionar a 'home'
  redirectTo: 'by-capital'
  }
];

@NgModule({
  imports: [
RouterModule.forChild(routes)//aqui usamos la funcion'forChild()'pq ya definims el objeto 'RouterModule' con el metodo 'forRoot()' en elmodulo d rutas principal de la App

  ],
  exports: [
    RouterModule
  ],

})
export class ContriesRoutingModule { }
