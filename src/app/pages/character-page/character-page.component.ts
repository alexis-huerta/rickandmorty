import { Component, OnInit } from '@angular/core';
import { select, State } from '@ngrx/store';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {
  character: any;
  constructor(private state: State<any>) { 
    state.pipe(select('data')).subscribe(state => this.character = state)
  }

  ngOnInit(): void {
  }

}
