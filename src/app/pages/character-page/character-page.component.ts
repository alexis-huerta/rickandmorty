import { Component, OnInit } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { BaseComponent } from 'src/app/components/base-component/base.component';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent extends BaseComponent implements OnInit {
  character: any;

  constructor(private store: Store<any>) { 
    super();
    this.subscription.add(
      store.pipe(select('data')).subscribe(state =>{
         
        this.character = state
      })
    );
  }

  ngOnInit(): void {
  }

}
