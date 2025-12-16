import { useContext } from "react";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";

const CategorySelector = () => {
  const {state, dispatch} = useContext(stateContext)

  const categoryEle = state.categories.map((ele, index) => {
    return <label key={index}>
             <input type="checkbox" /> {ele}
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