import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
    <Container>
      <NavBar />
     <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
     </Routes>
    </Container>
    </BrowserRouter>
    
  );
}

export default App;