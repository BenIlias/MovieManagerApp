import { useContext } from "react";
import MovieDataFormRow from "./MovieDataFormRow";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";
import { Field } from "formik";
import type { MovieSectionProps } from "../types/state";

const MovieData = ({formik}: MovieSectionProps) => {
  const { state, dispatch } = useContext(stateContext)

  const studioElem = state.movieStudios.map((ele, index) => {
    return <option key={index} value={ele}>{ele}</option>
  })

  const seriesElem = state.movieSeries.map((ele, index) => {
    return <option key={index} value={ele}>{ele}</option>
  })


  return (
    <MovieSection title="Movie Data">
      <div className="h-64">
          <fieldset>
            <div>
              <MovieDataFormRow title="Name">
                <Field className="movie-data-input" type="text" name="movieId"/>
              </MovieDataFormRow>
              <MovieDataFormRow title="Studio">
                <Field as="select" className="py-1 rounded-lg w-full" name="movieStudioId">
                  <option value="None">None</option>
                  {studioElem}
                </Field>
            </MovieDataFormRow>

            <MovieDataFormRow title="Series">
              <Field as="select" className="py-1 rounded-lg w-full" name="movieSeriesId">
                <option value="None">None</option>
                {seriesElem}
              </Field>
            </MovieDataFormRow>
            <MovieDataFormRow title="Series #">
              <Field className="movie-data-input" type="text" name="movieSeriesNumber"/>
            </MovieDataFormRow>

            <div className="flex my-4">
              <button
                className="movie-data-button bg-green-700 hover:bg-green-600"
                type="submit"
              >
                Update
              </button>

              <button
                className="movie-data-button bg-red-700 hover:bg-red-600"
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        </fieldset>
    </div>
    </MovieSection >
  );
};

export default MovieData;