import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Academics from "./Academics";
import Admission from "./Admission";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/academics">Academics</NavLink>
        <NavLink to="/admission">Admission</NavLink>
      </nav>
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
