import { Action } from "@ngrx/store";

export enum ActionTypes {
    getCharacters = '[characters] get characters list',
    getCharacter = '[character] get character info',
    getLocations = '[locations] get locations',
    getEpisodes = '[episodes] get episodes list',
    getMultipleCharacters = '[characters location] get characters from location',

    LoadCharactersSuccess = '[characters] Load success',
    LoadCharacterSuccess = '[character] Load success',
    LoadLocationsSuccess = '[locations] Load success',
    LoadEpisodesSuccess = '[episodes] Load success',
    LoadMultipleCharactersSuccess = '[multiple characters] Load success',
  }

export class getCharacters implements Action {
    readonly type = ActionTypes.getCharacters;
}
export class getCharacter implements Action {
    readonly type = ActionTypes.getCharacter;
    constructor(public payload: number) {}
}

export class getMultipleCharacters implements Action {
  readonly type = ActionTypes.getMultipleCharacters;
  constructor(public payload: string[]) {}
}

export class getLocations implements Action {
  readonly type = ActionTypes.getLocations;
}

export class getEpisodes implements Action {
  readonly type = ActionTypes.getEpisodes;
}

export class LoadCharacters implements Action {
    readonly type = ActionTypes.LoadCharactersSuccess;
    constructor(public payload: any) {}
  }

  export class LoadCharacter implements Action {
    readonly type = ActionTypes.LoadCharacterSuccess;
    constructor(public payload: any) {}
  }

  export class LoadLocations implements Action {
    readonly type = ActionTypes.LoadLocationsSuccess;
    constructor(public payload: any) {}
  }

  export class LoadMultipleCharacters implements Action {
    readonly type = ActionTypes.LoadMultipleCharactersSuccess;
    constructor(public payload: any) {}
  }

  export class LoadEpisodes implements Action {
    readonly type = ActionTypes.LoadEpisodesSuccess;
    constructor(public payload: any) {}
  }

export type Actions =  getCharacters | LoadCharacters | getCharacter | LoadCharacter | LoadLocations | getLocations | LoadMultipleCharacters | getMultipleCharacters | LoadEpisodes | getEpisodes;