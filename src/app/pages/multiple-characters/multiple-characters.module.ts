import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleCharactersRoutingModule } from './multiple-characters-routing.module';
import { MultipleCharactersComponent } from './multiple-characters.component';


@NgModule({
  declarations: [MultipleCharactersComponent],
  imports: [
    CommonModule,
    MultipleCharactersRoutingModule
  ]
})
export class MultipleCharactersModule { }
