import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterPageComponent } from './character-page.component';

const routes: Routes = [
  { path: '', component: CharacterPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterPageRoutingModule { }
