import { useContext } from "react";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";

const MovieList = () => {
  const {state, dispatch} = useContext(stateContext)
  
  const movieEle = state.movies.map((ele, index) => {
    return <option key={index}>{ele}</option>
  })
  return (
    <MovieSection title="Movie List">
      <select className="h-64 w-full" size={10}>
        {movieEle}
      </select>
    </MovieSection>
  );
};

export default MovieList;