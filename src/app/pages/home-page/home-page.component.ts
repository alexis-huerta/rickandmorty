import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { BaseComponentComponent } from 'src/app/components/base-component/base-component.component';
import { getCharacters } from 'src/app/store/actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BaseComponentComponent implements OnInit {
  searchControl = new FormControl('');

  constructor(
    private readonly router: Router,
    private store: Store<any>
  ) { 
    super();
  }

  ngOnInit(): void {
    this.observeInput();
  }

  goTo(name: string) {
    if (name === 'characters') {
      this.store.dispatch(new getCharacters());
    }
    this.router.navigate(['home', name]);
  }

  observeInput() {
    this.subscription.add(
      this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(res => console.log(res))
    );
  }

}
