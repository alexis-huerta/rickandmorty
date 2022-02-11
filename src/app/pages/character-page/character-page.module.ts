import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPageRoutingModule } from './character-page-routing.module';
import { CharacterPageComponent } from './character-page.component';


@NgModule({
  declarations: [CharacterPageComponent],
  imports: [
    CommonModule,
    CharacterPageRoutingModule
  ]
})
export class CharacterPageModule { }
