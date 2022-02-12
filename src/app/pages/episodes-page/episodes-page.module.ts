import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesPageRoutingModule } from './episodes-page-routing.module';
import { EpisodesPageComponent } from './episodes-page.component';
import { PaginationModule } from 'src/app/components/pagination/pagination.module';


@NgModule({
  declarations: [EpisodesPageComponent],
  imports: [
    CommonModule,
    EpisodesPageRoutingModule,
    PaginationModule
  ]
})
export class EpisodesPageModule { }
