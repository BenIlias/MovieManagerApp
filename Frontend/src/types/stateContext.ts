import { createContext } from "react";
import type { ActionType, StateType } from "./state";
import type React from "react";
import { initialState } from "../states/initialState";


export default createContext
<{state: StateType, dispatch: React.Dispatch<ActionType>}>
({state: initialState, dispatch: () => undefined})