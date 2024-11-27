import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { ListComponent } from '../heroes/list/hero.list.component';
import { dbzListComponent } from './componentes/list/list.component';
import { AddCharacterComponent } from './componentes/add-character/add-character.component';




@NgModule({
  declarations: [
    MainPageComponent,
    dbzListComponent,
    AddCharacterComponent
  ],
  exports:[
MainPageComponent,
dbzListComponent,

  ],
  imports: [
    CommonModule,
    FormsModule


  ]
})
export class DbzModule { }
