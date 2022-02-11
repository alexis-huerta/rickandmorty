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

    loadLocations$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ActionTypes.getLocations as any),
            mergeMap(() => {
                return this.rickandmortyService.getLocations().pipe(
                map((locations) => ({
                    type: ActionTypes.LoadLocationsSuccess,
                    payload: locations
                })),
                catchError(() => EMPTY)
            )})
        )
    )

    loadMultipleCharacters$ = createEffect(() => 
    this.actions$.pipe(
        ofType(ActionTypes.getMultipleCharacters as any),
        mergeMap((state) => {
            return this.rickandmortyService.getMultipleCharacters(state.payload).pipe(
            map((character) => ({
                type: ActionTypes.LoadMultipleCharactersSuccess,
                payload: character
            })),
            catchError(() => EMPTY)
        )})
    )
)

    loadEpisodes$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ActionTypes.getEpisodes as any),
            mergeMap(() => {
                return this.rickandmortyService.getEpisode().pipe(
                map((episodes) => ({
                    type: ActionTypes.LoadEpisodesSuccess,
                    payload: episodes
                })),
                catchError(() => EMPTY)
            )})
        )
    )
}