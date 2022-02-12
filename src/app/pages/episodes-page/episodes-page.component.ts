import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getEpisodes, getMultipleCharacters } from 'src/app/store/actions';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.scss']
})
export class EpisodesPageComponent implements OnInit {
  episodes: any[] = [];
  constructor(private store: Store<any>, private readonly router: Router) {
    store.pipe(select('data')).subscribe((state) =>{
      if (state) {
        this.episodes = state.data;
      }
    
    })
   }

  ngOnInit(): void {
    this.getEpisodes(1);
  }

  getEpisodes(currentPage: number) {
    this.store.dispatch(new getEpisodes(currentPage));
  }


  goToCharacters(episode: any) {
    let charactersId = [];
    charactersId =  episode.characters.map(resident => {
          return resident.split('/').pop();
      });
      if (charactersId.length === 1) {
        charactersId.push(charactersId[0]);
        charactersId = charactersId;
      }
    this.store.dispatch(new getMultipleCharacters(charactersId));
    this.router.navigate(['home','characters']);
  }
}
