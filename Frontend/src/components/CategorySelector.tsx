import { useContext } from "react";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";
import { Field } from "formik";
import type { MovieSectionProps } from "../types/state";

const CategorySelector = ({formik}: MovieSectionProps) => {
  const {state, dispatch} = useContext(stateContext)

  const categoryEle = state.categories.map((ele, index) => {
    return <label key={index}>
             <Field type="checkbox" name="movieCategories" value={ele}/> {ele}
           </label>
  })
  return (
    <MovieSection title="Categories">
      <div className="gap-1 grid grid-cols-3 h-96 overflow-y-scroll">
        {categoryEle}
      </div>
    </MovieSection>
  );
};



export default CategorySelector;