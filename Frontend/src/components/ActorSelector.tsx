import { useContext } from "react";
import ActorSelectorList from "./ActorSelectorList";
import MovieSection from "./MovieSection";
import stateContext from "../types/stateContext";

const ActorSelector = () => {
  const {state, dispatch} = useContext(stateContext)

  const actorElement = state.actors.map((ele, index) => {
    return <option key={index}>{ele}</option>
  })
  
  return (
    <MovieSection title="Actors">
      <div className="flex h-96">
        <ActorSelectorList title="Available">
          <select className="border border-green-500 w-full" size={13}>
            {actorElement}
          </select>
        </ActorSelectorList>

        <ActorSelectorList title="Selected">
          <select className="border border-green-500 w-full" size={13}>
            
          </select>
        </ActorSelectorList>
      </div>
    </MovieSection>
  );
};

export default ActorSelector;