import { Actions, type ActionType, type StateType } from "../types/state";


export const reducer = (state: StateType, action: ActionType) => {
    switch(action.type) {
        case Actions.setActor:
            return {...state, actors: [...state['actors'], action.payload]}
        
        case Actions.setCategory:
            return {...state, categories: [...state['categories'], action.payload]}   
        
        case Actions.setMovieSeries:
            return {...state, movieSeries: [...state['movieSeries'], action.payload]}  
        
        case Actions.setMovieStudio:
            return {...state, movieStudios: [...state['movieStudios'], action.payload]}  
        
        default:
            return state

    }
}