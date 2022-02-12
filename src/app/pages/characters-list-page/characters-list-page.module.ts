import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListPageRoutingModule } from './characters-list-page-routing.module';
import { CharactersListPageComponent } from './characters-list-page.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';


@NgModule({
  declarations: [CharactersListPageComponent],
  imports: [
    CommonModule,
    CharactersListPageRoutingModule,
    PaginationModule
  ]
})
export class CharactersListPageModule { }
