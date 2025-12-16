import { useContext } from "react";
import MovieDataFormRow from "./MovieDataFormRow";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";

const MovieData = () => {
  const {state, dispatch} = useContext(stateContext)
  
  const studioElem = state.movieStudios.map((ele, index) => {
    return <option key={index}>{ele}</option>
  })

  const seriesElem = state.movieSeries.map((ele, index) => {
    return <option key={index}>{ele}</option>
  })

  
  return (
    <MovieSection title="Movie Data">
      <div className="h-64">
        <form>
          <fieldset>
            <div>
              <MovieDataFormRow title="Name">
                <input className="movie-data-input" type="text" />
              </MovieDataFormRow>
              <MovieDataFormRow title="Studio">
                <select className="py-1 rounded-lg w-full">
                 <option>None</option>
                 {studioElem}
                </select>
              </MovieDataFormRow>

              <MovieDataFormRow title="Series">
                <select className="py-1 rounded-lg w-full">
                  <option>None</option>
                  {seriesElem}
                </select>
              </MovieDataFormRow>

              <MovieDataFormRow title="Series #">
                <input className="movie-data-input" type="text" />
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
        </form>
      </div>
    </MovieSection>
  );
};

export default MovieData;