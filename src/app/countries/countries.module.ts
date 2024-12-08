import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import{ContriesRoutingModule}from './countries-routing.modules';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { CountryTableComponent } from './components/countryTable/countryTable.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { CountryPageComponent } from './pages/CountryPage/CountryPage.component';
@NgModule({
  imports: [
    CommonModule,
    ContriesRoutingModule,
    SharedModule

  ],
  exports:[


  ],
  declarations: [CountriesComponent,
    ByCapitalPageComponent,
    CountryTableComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent
  ]
})
export class CountriesModule { }
