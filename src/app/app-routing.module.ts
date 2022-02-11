import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{
  path: 'home',
  component: HomePageComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/home-page/home-page.module')
        .then(m => m.HomePageModule)
    },
    {
      path: 'characters',
      loadChildren: () => import('./pages/characters-list-page/characters-list-page.module')
        .then(m => m.CharactersListPageModule)
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
