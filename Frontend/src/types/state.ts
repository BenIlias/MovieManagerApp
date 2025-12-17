
// StateTypes for Reducer : 

import type { FormikProps } from "formik"

export interface StateType {
    movies: string[],
    actors: string[],
    categories: string[],
    movieStudios: string[],
    movieSeries: string[],

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

export interface FormikAdminFormTypes {
    value: string,
    selection: "actor" | "category" | "series" | "studio"
}



// StateTypes for Formik (Main Form) : 

export interface FormikMainFormTypes {
    movieId: string
    movieName: string
    movieStudioId: string
    movieSeriesId: string
    movieSeriesNumber: string
    movieActorAvailableId: string
    movieActorSelectedId: string
    movieCategories: string[]

}


export interface MovieSectionProps {
    formik: FormikProps<FormikMainFormTypes>
}

