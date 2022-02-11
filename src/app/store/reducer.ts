import { Actions, ActionTypes } from "./actions";


export const initialState = {
    data: []
};

export function dataReducer(state = initialState, action: Actions) {
    console.log(action);
    
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
        default:
            break;
    }
}