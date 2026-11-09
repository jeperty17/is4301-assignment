import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css";
import Home from "./Home";
import Academics from "./Academics";
import Admission from "./Admission";
import Login from "./Login";

// Sends users who are not logged in to the login page
function RequireAuth({ user, children }) {
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname, message: "Please log in to view this page." }}
      />
    );
  }
  return children;
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoading(false);
      }),
    []
  );

  if (loading) return null;

  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/academics">Academics</NavLink>
        <NavLink to="/admission">Admission</NavLink>
        <span className="spacer" />
        {user ? (
          <>
            <span className="user">{user.email}</span>
            <button onClick={() => signOut(auth)}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/academics"
            element={<RequireAuth user={user}><Academics /></RequireAuth>}
          />
          <Route
            path="/admission"
            element={<RequireAuth user={user}><Admission /></RequireAuth>}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
