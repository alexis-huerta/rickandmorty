import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BaseComponentComponent } from 'src/app/components/base-component/base-component.component';

@Component({
  selector: 'app-multiple-characters',
  templateUrl: './multiple-characters.component.html',
})
export class MultipleCharactersComponent extends BaseComponentComponent implements OnInit {
    characters: any[];
    constructor(private store: Store<any>) {
      super();
      this.subscription.add(
        store.pipe(select('data')).subscribe((state) =>{
          if (state) {
            this.characters = state.data;
          }
        })
      )
   }

  ngOnInit(): void {
  }

}
