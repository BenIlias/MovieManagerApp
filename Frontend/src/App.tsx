import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";
import StateContext from "./types/stateContext";
import { initialState } from "./states/initialState";
import { useReducer } from "react";
import { reducer } from "./states/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  return (
    <StateContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
    <Container>
      <NavBar />
     <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
     </Routes>
    </Container>
    </BrowserRouter>
    </StateContext.Provider>
    
  );
}

export default App;