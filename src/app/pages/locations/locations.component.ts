import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getLocations, getMultipleCharacters } from 'src/app/store/actions';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: any[];
  constructor(private store: Store<any>, private readonly router: Router) {
    store.pipe(select('data')).subscribe((state) =>{
      if (state) {
        this.locations = state.data;
      }
    
    })
   }

  ngOnInit(): void {
    this.store.dispatch(new getLocations());
  }

  goToCharacters(location: any) {
    let charactersId = [];
    charactersId =  location.residents.map(resident => {
          return resident.split('/').pop();
      });
      if (charactersId.length === 1) {
        charactersId.push(charactersId[0]);
        charactersId = charactersId;
      }
      console.log(location);
      
    this.store.dispatch(new getMultipleCharacters(charactersId));
    this.router.navigate(['home','characters']);
  }

}
