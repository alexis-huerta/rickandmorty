import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { getCharacter, getCharacters } from 'src/app/store/actions';

@Component({
  selector: 'app-characters-list-page',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss']
})
export class CharactersListPageComponent implements OnInit {
  data: any[] = [];
  type: string;
  constructor(private store: Store<any>, private readonly router: Router, private readonly rickandmortyService: RickAndMortyService) {
    store.pipe(select('data')).subscribe((state) =>{
      if (state) {
        this.data = state.data
      }
    
    })
   }

  ngOnInit(): void {
    if (!this.rickandmortyService.isMultiple) {
     this.getCharacters();
    }
    this.rickandmortyService.isMultiple = false;
  }

  goToCharacterinfo(characterId: number) {
    this.store.dispatch(new getCharacter(characterId));
    this.router.navigate(['home', 'character']);
  }

  getCharacters() {
    this.store.dispatch(new getCharacters());
  }

}
