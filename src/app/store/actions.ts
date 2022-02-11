import { Action } from "@ngrx/store";

export enum ActionTypes {
    getCharacters = '[characters] get characters list',
    getCharacter = '[character] get character info',
    getLocations = '[locations] get locations',
    getEpisodes = '[episodes] get episodes list',
    LoadCharactersSuccess = '[characters] Load success',
    LoadCharacterSuccess = '[character] Load success',
}

export class getCharacters implements Action {
    readonly type = ActionTypes.getCharacters;
}

export class getCharacter implements Action {
    readonly type = ActionTypes.getCharacter;
    constructor(public payload: number) {}
}

export class LoadCharacters implements Action {
    readonly type = ActionTypes.LoadCharactersSuccess;
    constructor(public payload: any) {}
  }

  export class LoadCharacter implements Action {
    readonly type = ActionTypes.LoadCharacterSuccess;
    constructor(public payload: any) {}
  }

export type Actions =  getCharacters | LoadCharacters | getCharacter | LoadCharacter;