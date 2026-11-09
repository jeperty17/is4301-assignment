import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// Turns Firebase error codes into clear messages for the user
const errorMessages = {
  "auth/wrong-password": "Wrong password. Please try again.",
  "auth/user-not-found": "No account exists with this email. Please sign up first.",
  "auth/invalid-credential": "Wrong email or password. Please try again.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/missing-password": "Please enter your password.",
  "auth/email-already-in-use": "An account with this email already exists. Please log in instead.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/popup-closed-by-user": "Google sign-in was cancelled.",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message || "");
  const navigate = useNavigate();

  const run = async (signIn) => {
    try {
      await signIn();
      navigate(location.state?.from || "/");
    } catch (err) {
      setMessage(errorMessages[err.code] || err.message);
    }
  };

  return (
    <div className="login">
      <h1>Login / Sign up</h1>
      {message && <div className="error">{message}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => run(() => signInWithEmailAndPassword(auth, email, password))}>
        Login
      </button>
      <button onClick={() => run(() => createUserWithEmailAndPassword(auth, email, password))}>
        Sign up
      </button>
      <button className="google" onClick={() => run(() => signInWithPopup(auth, googleProvider))}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
