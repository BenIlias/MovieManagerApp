import { useContext } from "react";
import ActorSelectorList from "./ActorSelectorList";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";
import { Field } from "formik";
import type { MovieSectionProps } from "../types/state";

const ActorSelector = ({formik}: MovieSectionProps) => {
  const {state, dispatch} = useContext(stateContext)

  const actorElement = state.actors.map((ele, index) => {
    return <option key={index} value={ele}>{ele}</option>
  })
  
  return (
    <MovieSection title="Actors">
      <div className="flex h-96">
        <ActorSelectorList title="Available">
          <Field as="select" name="movieActorAvailableId" className="border border-green-500 w-full" size={13}>
            {actorElement}
          </Field>
        </ActorSelectorList>

        <ActorSelectorList title="Selected">
          <Field as="select" name="movieActorSelectedId" className="border border-green-500 w-full" size={13}>
            
          </Field>
        
        </ActorSelectorList>
      </div>
    </MovieSection>
  );
};

export default ActorSelector;