import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RickAndMortyService } from "../services/rick-and-morty.service";
import { ActionTypes } from "./actions";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from "rxjs";

@Injectable()
export class rickandmortyEffects {
    constructor( private actions$: Actions, private readonly rickandmortyService: RickAndMortyService) {}

    loadCharacters$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ActionTypes.getCharacters as any),
            mergeMap(() => this.rickandmortyService.getcharactersList().pipe(
                map((characters) => ({
                    type: ActionTypes.LoadCharactersSuccess,
                    payload: characters
                })),
                catchError(() => EMPTY)
            ))
        )
    )

    loadCharacter$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ActionTypes.getCharacter as any),
            mergeMap((state) => {
                return this.rickandmortyService.getCharacter(state.payload).pipe(
                map((character) => ({
                    type: ActionTypes.LoadCharacterSuccess,
                    payload: character
                })),
                catchError(() => EMPTY)
            )})
        )
    )
}