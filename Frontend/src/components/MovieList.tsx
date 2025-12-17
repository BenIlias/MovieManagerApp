import { useContext } from "react";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";
import { Field, type FormikProps } from "formik";
import type { FormikMainFormTypes, MovieSectionProps } from "../types/state";



const MovieList = ({formik}: MovieSectionProps) => {
  const {state, dispatch} = useContext(stateContext)
  
  const movieEle = state.movies.map((ele, index) => {
    return <option key={index} value={index}>{ele}</option>
  })
  return (
    <MovieSection title="Movie List">
      <Field as="select" className="h-64 w-full" size={10} {...formik.getFieldProps('movieName')}>
        {movieEle}
      </Field>
    </MovieSection>
  );
};

export default MovieList;