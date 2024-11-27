import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import {  ListComponent1 } from './list/hero.list.component';

@NgModule({
  exports: [
    HeroComponent,
    ListComponent1,
  ],
  declarations: [
    HeroComponent,
    ListComponent1,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
