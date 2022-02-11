import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getCharacter, getCharacters } from 'src/app/store/actions';

@Component({
  selector: 'app-characters-list-page',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss']
})
export class CharactersListPageComponent implements OnInit {
  data: any[] = [];
  constructor(private store: Store<any>, private readonly router: Router) {
    store.pipe(select('data')).subscribe((state) =>{
      console.log(state);
      if (state) {

        this.data = state.data
      }
    
    })
   }

  ngOnInit(): void {
    this.store.dispatch(new getCharacters());
    
  }

  goToCharacterinfo(characterId: number) {
    this.store.dispatch(new getCharacter(characterId));
    this.router.navigate(['home', 'character']);
  }

}
