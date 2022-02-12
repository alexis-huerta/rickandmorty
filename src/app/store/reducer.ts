import { Actions, ActionTypes } from "./actions";


export const initialState = {
    data: []
};

export function dataReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.LoadCharactersSuccess:
            return {
                ...state,
                type: 'character',
                data: [...action.payload.results]
            }
        case ActionTypes.LoadCharacterSuccess:
            return {
                ...state,
                type: 'detail',
                data: Object.assign({}, action.payload)
            }
        case ActionTypes.LoadLocationsSuccess:
            return {
                ...state,
                type: 'location',
                data: [...action.payload.results]
            }
        case ActionTypes.LoadMultipleCharactersSuccess:
            return {
                ...state,
                type: 'character',
                data: [...action.payload]
            }
        case ActionTypes.LoadEpisodesSuccess:
            return {
                ...state,
                type: 'episode',
                data: [...action.payload.results]
            }
        case ActionTypes.searchSuccess:
            return {
                ...state,
                data: [...action.payload.results]
            }
        default:
            break;
    }
}