import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { BaseComponent } from 'src/app/components/base-component/base.component';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { getCharacters, search } from 'src/app/store/actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseComponent implements OnInit {
  searchControl = new FormControl('');
  type: string;

  constructor(
    private readonly router: Router,
    private store: Store<any>,
    private readonly rickandmortyService: RickAndMortyService
  ) { 
    super();
    store.pipe(select('data')).subscribe((state) =>{
      if (state && state.type) {
        
        this.type = state.type;
      }
    
    })
  }

  ngOnInit(): void {
    this.observeInput();
  }

  goTo(name: string) {
    if (name === 'characters' && this.rickandmortyService.isMultiple) {
      this.store.dispatch(new getCharacters(1));
    }
    this.router.navigate(['home', name]);
    this.rickandmortyService.isMultiple = false;
  }

  observeInput() {
    this.subscription.add(
      this.searchControl.valueChanges
      .pipe(debounceTime(900))
      .subscribe(res => this.searchBy(this.type, res))
    );
  }

  private searchBy(type:string, name: string) {
    this.store.dispatch(new search({type, name}))
  }

}
