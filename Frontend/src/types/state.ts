
// StateTypes for Reducer : 

export interface StateType {
    movies: string[],
    
    actors: string[],
    selectedActors: string[] | null,
    
    categories: string[],
    selectedCategories: string[] | null,

    
    selectedMovieId: number | null,

    movieName: string | null,
    movieStudios: string[],
    movieStudioId: number | null,

    movieSeries: string[],
    movieSeriesId: number | null,
    movieSeriesNumber: number | null,
};


export enum Actions {
    setActor = "setActor",
    setCategory = "setCategory",
    setMovieSeries = "setMovieSeries",
    setMovieStudio = "setMovieStudio"

}

export type ActionType = SetActorAction | SetCategoryAction | SetMovieSeriesAction | SetMovieStudioAction

export interface SetActorAction {
    type: "setActor",
    payload: string
}

export interface SetCategoryAction {
    type: "setCategory",
    payload: string
}

export interface SetMovieSeriesAction {
    type: "setMovieSeries",
    payload: string
}

export interface SetMovieStudioAction {
    type: "setMovieStudio",
    payload: string
}



// StateTypes for Formik (Admin Form) : 

export interface FormikSubmitType {
    value: string,
    selection: "actor" | "category" | "series" | "studio"
  }



