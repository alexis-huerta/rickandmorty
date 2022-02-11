import { Actions, ActionTypes } from "./actions";


export const initialState = {
    data: []
};

export function dataReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.LoadCharactersSuccess:
            return {
                ...state,
                data: [...action.payload.results]
            }
        case ActionTypes.LoadCharacterSuccess:
            return {
                ...state,
                data: Object.assign({}, action.payload)
            }
        case ActionTypes.LoadLocationsSuccess:
            return {
                ...state,
                data: [...action.payload.results]
            }
        case ActionTypes.LoadMultipleCharactersSuccess:
            return {
                ...state,
                data: [...action.payload]
            }
        case ActionTypes.LoadEpisodesSuccess:
            return {
                ...state,
                data: [...action.payload.results]
            }
        default:
            break;
    }
}