import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListPageRoutingModule } from './characters-list-page-routing.module';
import { CharactersListPageComponent } from './characters-list-page.component';


@NgModule({
  declarations: [CharactersListPageComponent],
  imports: [
    CommonModule,
    CharactersListPageRoutingModule,
  ]
})
export class CharactersListPageModule { }
