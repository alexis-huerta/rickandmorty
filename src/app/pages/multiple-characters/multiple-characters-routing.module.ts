import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultipleCharactersComponent } from './multiple-characters.component';

const routes: Routes = [
  {path: '', component: MultipleCharactersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleCharactersRoutingModule { }
